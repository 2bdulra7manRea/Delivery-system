import { Shipment } from 'src/models/shipment.entity';
import { MongoRepository } from 'typeorm';
import { AgentsService } from './agents.service';
import { ReviewService } from './review.service';
import { ScheduleTimeDeliveryService } from './schuduleTimeDelivery.service';
import { SignturesService } from './signtures.service';
export declare class ShipmentsService {
    private shipmentModel;
    private agentService;
    private scheduleDelivery;
    private signtureService;
    private reviewService;
    private NUM_SHIPMENT;
    constructor(shipmentModel: MongoRepository<Shipment>, agentService: AgentsService, scheduleDelivery: ScheduleTimeDeliveryService, signtureService: SignturesService, reviewService: ReviewService);
    createShipment(body: any): Promise<string>;
    private checkEligibilityForShipment;
    updateShipmentStatus(body: any): Promise<void>;
    receiveShipment(body: any): Promise<void>;
}
