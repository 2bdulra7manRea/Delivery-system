import { DeliverySchedule } from 'src/models/deliveryTIme.entity';
import { MongoRepository } from 'typeorm';
export declare class ScheduleTimeDeliveryService {
    private scheduleTimeDelivery;
    constructor(scheduleTimeDelivery: MongoRepository<DeliverySchedule>);
    assignDate(start: any, end: any, shipmentId: any): Promise<import("typeorm").InsertResult>;
}
