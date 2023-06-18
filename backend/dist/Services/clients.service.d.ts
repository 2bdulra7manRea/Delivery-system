import { Client } from 'src/models/client.entity';
import { MongoRepository } from 'typeorm';
export declare class ClientService {
    private clientRepos;
    constructor(clientRepos: MongoRepository<Client>);
    create(client: any): Promise<{
        clientId: string;
    }>;
    isBlocked(): Promise<boolean>;
}
