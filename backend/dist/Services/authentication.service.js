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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationUsersClients = void 0;
const common_1 = require("@nestjs/common");
const managementUsers_service_1 = require("./managementUsers.service");
const userAccess_service_1 = require("./userAccess.service");
let AuthenticationUsersClients = class AuthenticationUsersClients {
    constructor(userAccess, managementUser) {
        this.userAccess = userAccess;
        this.managementUser = managementUser;
    }
    async registerClients(body) {
        const { phone_number, userType, password } = body;
        const result = await this.managementUser.initClient(body);
        return await this.userAccess.initAccessForUser(result.clientId, userType, phone_number, password);
    }
    login(body) {
        const { phone_number, password } = body;
        return this.userAccess.authenticateUser(phone_number, password);
    }
    async logout(auth) {
        const result = await this.userAccess.decodeToken(auth);
        return this.userAccess.logout(result.clientId);
    }
};
AuthenticationUsersClients = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userAccess_service_1.UserAccessService,
        managementUsers_service_1.ManagementUser])
], AuthenticationUsersClients);
exports.AuthenticationUsersClients = AuthenticationUsersClients;
//# sourceMappingURL=authentication.service.js.map