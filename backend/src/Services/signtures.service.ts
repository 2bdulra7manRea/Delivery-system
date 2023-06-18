import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Signture } from 'src/models/signture.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class SignturesService {
  constructor(
    @InjectRepository(Signture)
    private signtureModel: MongoRepository<Signture>,
  ) {}

  makeSintureForShipment(shipment_id, proof_image) {
    return this.signtureModel.insert({ shipment_id, proof_image });
  }
}
