import { Injectable } from '@nestjs/common';
import { USER_TYPE } from 'src/enum/userType';
import { AgentsService } from './agents.service';
import { ClientService } from './clients.service';
import { CustomersService } from './customers.service';
import { UserAccessService } from './userAccess.service';

@Injectable()
export class ManagementUser {
  constructor(
    private userAccess: UserAccessService,
    private clientsService: ClientService,
    private agentService: AgentsService,
    private customersService: CustomersService,
  ) {}

  async initClient(body): Promise<any> {
    const {
      first_name,
      last_name,
      location_address,
      phone_number,
      identity_card_number,
      email,
      userType,
      service_type,
      routes,
    } = body;

    const { clientId } = await this.clientsService.create({
      first_name,
      last_name,
      location_address,
      phone_number,
      identity_card_number,
      email,
    });

    switch (userType) {
      case USER_TYPE.AGENT:
        await this.agentService.createAgent(clientId);
        break;
      case USER_TYPE.CUSTOMER:
        await this.customersService.create(clientId, service_type, routes);
        break;
      default:
        break;
    }

    return { userType, clientId };
  }
}
