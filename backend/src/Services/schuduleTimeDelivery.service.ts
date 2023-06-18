import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliverySchedule } from 'src/models/deliveryTIme.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class ScheduleTimeDeliveryService {
  constructor(
    @InjectRepository(DeliverySchedule)
    private scheduleTimeDelivery: MongoRepository<DeliverySchedule>,
  ) {}

  async assignDate(start, end, shipmentId) {
    return this.scheduleTimeDelivery.insert({
      shipment_id: shipmentId,
      delivery_deadline: end,
      delivery_start: start,
    });
  }
}
