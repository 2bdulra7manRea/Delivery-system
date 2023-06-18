import { CreateShipmentDto } from 'src/dto/shipment.dto';
import { ShipmentsService } from 'src/Services/shipments.service';
export declare class ShipmentController {
    private readonly appService;
    constructor(appService: ShipmentsService);
    create(body: CreateShipmentDto): Promise<string>;
    receiveShipment(body: any): Promise<void>;
    updateStatus(body: any): Promise<void>;
}
