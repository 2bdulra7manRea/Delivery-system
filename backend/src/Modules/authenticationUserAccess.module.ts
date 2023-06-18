import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationUsersClientsController } from 'src/Controllers/authentication.controller';
import { Agent } from 'src/models/agent.entity';
import { Client } from 'src/models/client.entity';
import { Customer } from 'src/models/customer.entity';
import { UserAccess } from 'src/models/user_access';
import { AgentsService } from 'src/Services/agents.service';
import { AuthenticationUsersClients } from 'src/Services/authentication.service';
import { ClientService } from 'src/Services/clients.service';
import { CustomersService } from 'src/Services/customers.service';
import { ManagementUser } from 'src/Services/managementUsers.service';
import { UserAccessService } from 'src/Services/userAccess.service';
import configs from 'src/configs';
@Module({
  imports: [
    TypeOrmModule.forFeature([Client, Agent, Customer, UserAccess]),
    JwtModule.register({
      secret: configs.JWT_SECRET,
    }),
  ],
  controllers: [AuthenticationUsersClientsController],
  providers: [
    AuthenticationUsersClients,
    UserAccessService,
    ClientService,
    ManagementUser,
    AgentsService,
    CustomersService,
  ],
})
export class AuthenticationUsersClientsModule {}
