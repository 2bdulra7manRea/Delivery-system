import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Agent } from 'src/models/agent.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent) private readonly agentRepo: MongoRepository<Agent>,
  ) {}

  createAgent(client_id) {
    return this.agentRepo.insert({ client_id });
  }

  async checkEligibilityForShipment(agent_id) {
    return true;
  }
  getAgentById(id) {
    return this.agentRepo.findOne({ where: { _id: id } });
  }
}
