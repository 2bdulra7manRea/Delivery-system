import { AgentsService } from './agents.service';
import { ClientService } from './clients.service';
import { CustomersService } from './customers.service';
import { UserAccessService } from './userAccess.service';
export declare class ManagementUser {
    private userAccess;
    private clientsService;
    private agentService;
    private customersService;
    constructor(userAccess: UserAccessService, clientsService: ClientService, agentService: AgentsService, customersService: CustomersService);
    initClient(body: any): Promise<any>;
}
