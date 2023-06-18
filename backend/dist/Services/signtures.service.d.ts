import { Signture } from 'src/models/signture.entity';
import { MongoRepository } from 'typeorm';
export declare class SignturesService {
    private signtureModel;
    constructor(signtureModel: MongoRepository<Signture>);
    makeSintureForShipment(shipment_id: any, proof_image: any): Promise<import("typeorm").InsertResult>;
}
