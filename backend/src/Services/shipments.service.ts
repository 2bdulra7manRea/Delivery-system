import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { statusDelivery } from 'src/enum/deliveryStatus';
import { Shipment } from 'src/models/shipment.entity';
import { MongoRepository } from 'typeorm';
import { AgentsService } from './agents.service';
import { ReviewService } from './review.service';
import { ScheduleTimeDeliveryService } from './schuduleTimeDelivery.service';
import { SignturesService } from './signtures.service';

@Injectable()
export class ShipmentsService {
  private NUM_SHIPMENT = 5;

  constructor(
    @InjectRepository(Shipment)
    private shipmentModel: MongoRepository<Shipment>,
    private agentService: AgentsService,
    private scheduleDelivery: ScheduleTimeDeliveryService,
    private signtureService: SignturesService,
    private reviewService: ReviewService,
  ) {}

  async createShipment(body) {
    const { agent_id, customer_id, note, route_id } = body;

    const isAllowed = await this.checkEligibilityForShipment(agent_id);

    if (!isAllowed) {
      throw new BadRequestException(
        'The Agent is not allowed to take a new shipment',
      );
    }

    const delivery_date = new Date();
    const shipmentResult = await this.shipmentModel.insert({
      agent_id,
      customer_id,
      note,
      route_id,
      delivery_date,
      status: statusDelivery.NOT_ACTIVE,
    });

    console.log(shipmentResult.identifiers);

    const { _id } = shipmentResult.identifiers[0];

    await this.scheduleDelivery.assignDate(delivery_date, delivery_date, _id);
    return 'done';
  }
  // the agent must has less then 5 non-active shipments to has a new shipment
  private async checkEligibilityForShipment(agent_id) {
    const results = await this.shipmentModel.count({
      status: statusDelivery.NOT_ACTIVE,
      agent_id: agent_id,
    });
    return !(results >= this.NUM_SHIPMENT);
  }

  async updateShipmentStatus(body) {
    const { shipment_id, status } = body;
    let old_status;

    switch (status) {
      case statusDelivery.PICK_UP:
        old_status = statusDelivery.NOT_ACTIVE;

        break;

      case statusDelivery.ON_PROCESS:
        old_status = statusDelivery.PICK_UP;

        break;
      case statusDelivery.ON_DELIVERY:
        old_status = statusDelivery.ON_PROCESS;

        break;

      case statusDelivery.DELIVERED:
        old_status = statusDelivery.ON_DELIVERY;

        break;

      default:
        break;
    }

    await this.shipmentModel.findOneAndUpdate(
      {
        status: old_status,
        shipment_id,
      },
      {
        status: status,
      },
    );
  }

  async receiveShipment(body) {
    const { shipment_id, proof_image, review, rate } = body;
    const resultOfDelivery = await this.shipmentModel.findOneOrFail({
      where: {
        _id: shipment_id,
        status: statusDelivery.DELIVERED,
      },
    });

    if (!resultOfDelivery) {
      throw new BadRequestException('The shipment has been not delivered yet!');
    }

    await this.signtureService.makeSintureForShipment(shipment_id, proof_image);

    await this.reviewService.addReview(review, shipment_id, rate);
  }
}
