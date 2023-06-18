"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccessService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const user_access_1 = require("../models/user_access");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const accessStatus_1 = require("../enum/accessStatus");
let UserAccessService = class UserAccessService {
    constructor(userAccessModel, jwtService) {
        this.userAccessModel = userAccessModel;
        this.jwtService = jwtService;
        this.SALT_ROUND = 13;
    }
    async initAccessForUser(clientId, userType, phone_number, password) {
        const hashed = await this.hashPassword(password);
        const token = this.generateToken({
            clientId,
            userType,
            date: new Date(),
        });
        await this.userAccessModel.insert({
            access_token: token,
            password: hashed,
            user_id: clientId,
            user_type: userType,
            phone_number: phone_number,
            last_access_date: new Date(),
            access_status: accessStatus_1.ACCESS_STATUS.LOGGED_IN,
        });
        return { access_token: token, userType };
    }
    async authenticateUser(phone_number, password) {
        const user = await this.userAccessModel.findOne({
            where: { phone_number },
        });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        if (user.is_blocked) {
            throw new common_1.ForbiddenException();
        }
        const isMatched = await this.validatePassword(password, user.password);
        if (!isMatched) {
            throw new common_1.UnauthorizedException();
        }
        const token = this.generateToken({
            clienId: user.user_id,
            userType: user.user_type,
            date: new Date(),
        });
        await this.userAccessModel.updateOne({ user_id: user.user_id }, {
            access_token: token,
            last_access_date: new Date(),
            access_status: accessStatus_1.ACCESS_STATUS.LOGGED_IN,
        });
        return { access_token: token, userType: user.user_id };
    }
    logout(user_id) {
        return this.userAccessModel.updateOne({ user_id }, {
            last_access_date: new Date(),
            access_status: accessStatus_1.ACCESS_STATUS.LOGGED_OUT,
        });
    }
    async hashPassword(password) {
        return await bcrypt.hash(password, this.SALT_ROUND);
    }
    validatePassword(password, hashed) {
        return bcrypt.compare(password, hashed);
    }
    generateToken(data) {
        return this.jwtService.sign(data);
    }
    decodeToken(token) {
        const jwt = token.replace('Bearer', '');
        return this.jwtService.decode(jwt, { json: true });
    }
};
UserAccessService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(user_access_1.UserAccess)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository,
        jwt_1.JwtService])
], UserAccessService);
exports.UserAccessService = UserAccessService;
//# sourceMappingURL=userAccess.service.js.map