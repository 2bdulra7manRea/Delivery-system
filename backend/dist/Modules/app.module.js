"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("../Controllers/app.controller");
const app_service_1 = require("../Services/app.service");
const manager_module_1 = require("./manager.module");
const agent_module_1 = require("./agent.module");
const customer_module_1 = require("./customer.module");
const shipment_module_1 = require("./shipment.module");
const shipment_entity_1 = require("../models/shipment.entity");
const deliveryTIme_entity_1 = require("../models/deliveryTIme.entity");
const signture_entity_1 = require("../models/signture.entity");
const review_entity_1 = require("../models/review.entity");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
const authenticationUserAccess_module_1 = require("./authenticationUserAccess.module");
const client_entity_1 = require("../models/client.entity");
const agent_entity_1 = require("../models/agent.entity");
const user_access_1 = require("../models/user_access");
const customer_entity_1 = require("../models/customer.entity");
const httpException_filter_1 = require("../exceptions/httpException.filter");
const index_1 = require("./../configs/index");
const configDb = {
    type: 'mongodb',
    url: index_1.default.DB_URL,
    entities: [
        shipment_entity_1.Shipment,
        deliveryTIme_entity_1.DeliverySchedule,
        signture_entity_1.Signture,
        review_entity_1.Review,
        client_entity_1.Client,
        agent_entity_1.Agent,
        user_access_1.UserAccess,
        customer_entity_1.Customer,
    ],
    synchronize: true,
    useNewUrlParser: true,
    logging: true,
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot({
                limit: 20,
                ttl: 60,
            }),
            typeorm_1.TypeOrmModule.forRoot(configDb),
            authenticationUserAccess_module_1.AuthenticationUsersClientsModule,
            agent_module_1.AgentModule,
            manager_module_1.ManagerModule,
            customer_module_1.CustomerModule,
            shipment_module_1.ShipmentModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                useClass: throttler_1.ThrottlerGuard,
                provide: core_1.APP_GUARD,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: httpException_filter_1.HttpExceptionFilter,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map