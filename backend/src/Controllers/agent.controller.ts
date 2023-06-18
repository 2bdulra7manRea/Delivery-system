import { Controller, Get, Param } from '@nestjs/common';
import { AgentsService } from 'src/Services/agents.service';

@Controller('agents')
export class AgentController {
  constructor(private readonly appService: AgentsService) {}

  @Get('/info')
  getMyInfo(@Param('id') id: any) {
    // get id from token
    return this.appService.getAgentById(id);
  }
}
