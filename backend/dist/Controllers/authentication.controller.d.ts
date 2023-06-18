import { CreateLoginDto, CreateRegisterDto } from 'src/dto/auth.dto';
import { AuthenticationUsersClients } from 'src/Services/authentication.service';
export declare class AuthenticationUsersClientsController {
    private readonly appService;
    constructor(appService: AuthenticationUsersClients);
    login(body: CreateLoginDto): Promise<{
        access_token: string;
        userType: string;
    }>;
    register(body: CreateRegisterDto): Promise<object>;
    logout(auth: string): Promise<import("typeorm").UpdateWriteOpResult>;
}
