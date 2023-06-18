import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentController } from 'src/Controllers/agent.controller';
import { Agent } from 'src/models/agent.entity';
import { AgentsService } from 'src/Services/agents.service';

@Module({
  imports: [TypeOrmModule.forFeature([Agent])],
  controllers: [AgentController],
  providers: [AgentsService],
  exports: [AgentsService],
})
export class AgentModule {}
