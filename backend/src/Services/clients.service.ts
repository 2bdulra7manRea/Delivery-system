import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/models/client.entity';
import { MongoRepository } from 'typeorm';

export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepos: MongoRepository<Client>,
  ) {}

  async create(client): Promise<{ clientId: string }> {
    const result = await this.clientRepos.insert(client);

    return { clientId: result.identifiers[0]?._id };
  }

  async isBlocked(): Promise<boolean> {
    return;
  }
}
