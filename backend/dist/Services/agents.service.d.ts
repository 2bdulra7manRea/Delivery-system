import { Agent } from 'src/models/agent.entity';
import { MongoRepository } from 'typeorm';
export declare class AgentsService {
    private readonly agentRepo;
    constructor(agentRepo: MongoRepository<Agent>);
    createAgent(client_id: any): Promise<import("typeorm").InsertResult>;
    checkEligibilityForShipment(agent_id: any): Promise<boolean>;
    getAgentById(id: any): Promise<Agent>;
}
