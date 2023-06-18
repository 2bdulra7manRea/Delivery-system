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
exports.ManagementUser = void 0;
const common_1 = require("@nestjs/common");
const userType_1 = require("../enum/userType");
const agents_service_1 = require("./agents.service");
const clients_service_1 = require("./clients.service");
const customers_service_1 = require("./customers.service");
const userAccess_service_1 = require("./userAccess.service");
let ManagementUser = class ManagementUser {
    constructor(userAccess, clientsService, agentService, customersService) {
        this.userAccess = userAccess;
        this.clientsService = clientsService;
        this.agentService = agentService;
        this.customersService = customersService;
    }
    async initClient(body) {
        const { first_name, last_name, location_address, phone_number, identity_card_number, email, userType, service_type, routes, } = body;
        const { clientId } = await this.clientsService.create({
            first_name,
            last_name,
            location_address,
            phone_number,
            identity_card_number,
            email,
        });
        switch (userType) {
            case userType_1.USER_TYPE.AGENT:
                await this.agentService.createAgent(clientId);
                break;
            case userType_1.USER_TYPE.CUSTOMER:
                await this.customersService.create(clientId, service_type, routes);
                break;
            default:
                break;
        }
        return { userType, clientId };
    }
};
ManagementUser = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userAccess_service_1.UserAccessService,
        clients_service_1.ClientService,
        agents_service_1.AgentsService,
        customers_service_1.CustomersService])
], ManagementUser);
exports.ManagementUser = ManagementUser;
//# sourceMappingURL=managementUsers.service.js.map