"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shipment_controller_1 = require("../Controllers/shipment.controller");
const agent_entity_1 = require("../models/agent.entity");
const deliveryTIme_entity_1 = require("../models/deliveryTIme.entity");
const review_entity_1 = require("../models/review.entity");
const shipment_entity_1 = require("../models/shipment.entity");
const signture_entity_1 = require("../models/signture.entity");
const agents_service_1 = require("../Services/agents.service");
const review_service_1 = require("../Services/review.service");
const schuduleTimeDelivery_service_1 = require("../Services/schuduleTimeDelivery.service");
const shipments_service_1 = require("../Services/shipments.service");
const signtures_service_1 = require("../Services/signtures.service");
let ShipmentModule = class ShipmentModule {
};
ShipmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                shipment_entity_1.Shipment,
                agent_entity_1.Agent,
                deliveryTIme_entity_1.DeliverySchedule,
                review_entity_1.Review,
                signture_entity_1.Signture,
            ]),
        ],
        controllers: [shipment_controller_1.ShipmentController],
        providers: [
            shipments_service_1.ShipmentsService,
            agents_service_1.AgentsService,
            schuduleTimeDelivery_service_1.ScheduleTimeDeliveryService,
            review_service_1.ReviewService,
            signtures_service_1.SignturesService,
        ],
    })
], ShipmentModule);
exports.ShipmentModule = ShipmentModule;
//# sourceMappingURL=shipment.module.js.map