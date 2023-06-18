import { Injectable } from '@nestjs/common';
import { ManagementUser } from './managementUsers.service';
import { UserAccessService } from './userAccess.service';

@Injectable()
export class AuthenticationUsersClients {
  constructor(
    private userAccess: UserAccessService,
    private managementUser: ManagementUser,
  ) {}

  async registerClients(body): Promise<object> {
    const { phone_number, userType, password } = body;

    const result = await this.managementUser.initClient(body);

    return await this.userAccess.initAccessForUser(
      result.clientId,
      userType,
      phone_number,
      password,
    );
  }

  login(body) {
    const { phone_number, password } = body;
    return this.userAccess.authenticateUser(phone_number, password);
  }

  async logout(auth) {
    const result = await this.userAccess.decodeToken(auth);
    return this.userAccess.logout(result.clientId);
  }
}
