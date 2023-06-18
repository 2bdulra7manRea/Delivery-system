"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationUsersClientsModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const authentication_controller_1 = require("../Controllers/authentication.controller");
const agent_entity_1 = require("../models/agent.entity");
const client_entity_1 = require("../models/client.entity");
const customer_entity_1 = require("../models/customer.entity");
const user_access_1 = require("../models/user_access");
const agents_service_1 = require("../Services/agents.service");
const authentication_service_1 = require("../Services/authentication.service");
const clients_service_1 = require("../Services/clients.service");
const customers_service_1 = require("../Services/customers.service");
const managementUsers_service_1 = require("../Services/managementUsers.service");
const userAccess_service_1 = require("../Services/userAccess.service");
const configs_1 = require("../configs");
let AuthenticationUsersClientsModule = class AuthenticationUsersClientsModule {
};
AuthenticationUsersClientsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([client_entity_1.Client, agent_entity_1.Agent, customer_entity_1.Customer, user_access_1.UserAccess]),
            jwt_1.JwtModule.register({
                secret: configs_1.default.JWT_SECRET,
            }),
        ],
        controllers: [authentication_controller_1.AuthenticationUsersClientsController],
        providers: [
            authentication_service_1.AuthenticationUsersClients,
            userAccess_service_1.UserAccessService,
            clients_service_1.ClientService,
            managementUsers_service_1.ManagementUser,
            agents_service_1.AgentsService,
            customers_service_1.CustomersService,
        ],
    })
], AuthenticationUsersClientsModule);
exports.AuthenticationUsersClientsModule = AuthenticationUsersClientsModule;
//# sourceMappingURL=authenticationUserAccess.module.js.map