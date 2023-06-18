import { AgentsService } from 'src/Services/agents.service';
export declare class AgentController {
    private readonly appService;
    constructor(appService: AgentsService);
    getMyInfo(id: any): Promise<import("../models/agent.entity").Agent>;
}
