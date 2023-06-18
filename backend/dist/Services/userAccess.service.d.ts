import { UserAccess } from 'src/models/user_access';
import { MongoRepository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class UserAccessService {
    private userAccessModel;
    private jwtService;
    private SALT_ROUND;
    constructor(userAccessModel: MongoRepository<UserAccess>, jwtService: JwtService);
    initAccessForUser(clientId: any, userType: any, phone_number: any, password: any): Promise<{
        access_token: string;
        userType: any;
    }>;
    authenticateUser(phone_number: any, password: any): Promise<{
        access_token: string;
        userType: string;
    }>;
    logout(user_id: any): Promise<import("typeorm").UpdateWriteOpResult>;
    private hashPassword;
    private validatePassword;
    private generateToken;
    decodeToken(token: string): any;
}
