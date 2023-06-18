import { ManagementUser } from './managementUsers.service';
import { UserAccessService } from './userAccess.service';
export declare class AuthenticationUsersClients {
    private userAccess;
    private managementUser;
    constructor(userAccess: UserAccessService, managementUser: ManagementUser);
    registerClients(body: any): Promise<object>;
    login(body: any): Promise<{
        access_token: string;
        userType: string;
    }>;
    logout(auth: any): Promise<import("typeorm").UpdateWriteOpResult>;
}
