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
exports.ShipmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const deliveryStatus_1 = require("../enum/deliveryStatus");
const shipment_entity_1 = require("../models/shipment.entity");
const typeorm_2 = require("typeorm");
const agents_service_1 = require("./agents.service");
const review_service_1 = require("./review.service");
const schuduleTimeDelivery_service_1 = require("./schuduleTimeDelivery.service");
const signtures_service_1 = require("./signtures.service");
let ShipmentsService = class ShipmentsService {
    constructor(shipmentModel, agentService, scheduleDelivery, signtureService, reviewService) {
        this.shipmentModel = shipmentModel;
        this.agentService = agentService;
        this.scheduleDelivery = scheduleDelivery;
        this.signtureService = signtureService;
        this.reviewService = reviewService;
        this.NUM_SHIPMENT = 5;
    }
    async createShipment(body) {
        const { agent_id, customer_id, note, route_id } = body;
        const isAllowed = await this.checkEligibilityForShipment(agent_id);
        if (!isAllowed) {
            throw new common_1.BadRequestException('The Agent is not allowed to take a new shipment');
        }
        const delivery_date = new Date();
        const shipmentResult = await this.shipmentModel.insert({
            agent_id,
            customer_id,
            note,
            route_id,
            delivery_date,
            status: deliveryStatus_1.statusDelivery.NOT_ACTIVE,
        });
        console.log(shipmentResult.identifiers);
        const { _id } = shipmentResult.identifiers[0];
        await this.scheduleDelivery.assignDate(delivery_date, delivery_date, _id);
        return 'done';
    }
    async checkEligibilityForShipment(agent_id) {
        const results = await this.shipmentModel.count({
            status: deliveryStatus_1.statusDelivery.NOT_ACTIVE,
            agent_id: agent_id,
        });
        return !(results >= this.NUM_SHIPMENT);
    }
    async updateShipmentStatus(body) {
        const { shipment_id, status } = body;
        let old_status;
        switch (status) {
            case deliveryStatus_1.statusDelivery.PICK_UP:
                old_status = deliveryStatus_1.statusDelivery.NOT_ACTIVE;
                break;
            case deliveryStatus_1.statusDelivery.ON_PROCESS:
                old_status = deliveryStatus_1.statusDelivery.PICK_UP;
                break;
            case deliveryStatus_1.statusDelivery.ON_DELIVERY:
                old_status = deliveryStatus_1.statusDelivery.ON_PROCESS;
                break;
            case deliveryStatus_1.statusDelivery.DELIVERED:
                old_status = deliveryStatus_1.statusDelivery.ON_DELIVERY;
                break;
            default:
                break;
        }
        await this.shipmentModel.findOneAndUpdate({
            status: old_status,
            shipment_id,
        }, {
            status: status,
        });
    }
    async receiveShipment(body) {
        const { shipment_id, proof_image, review, rate } = body;
        const resultOfDelivery = await this.shipmentModel.findOneOrFail({
            where: {
                _id: shipment_id,
                status: deliveryStatus_1.statusDelivery.DELIVERED,
            },
        });
        if (!resultOfDelivery) {
            throw new common_1.BadRequestException('The shipment has been not delivered yet!');
        }
        await this.signtureService.makeSintureForShipment(shipment_id, proof_image);
        await this.reviewService.addReview(review, shipment_id, rate);
    }
};
ShipmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shipment_entity_1.Shipment)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository,
        agents_service_1.AgentsService,
        schuduleTimeDelivery_service_1.ScheduleTimeDeliveryService,
        signtures_service_1.SignturesService,
        review_service_1.ReviewService])
], ShipmentsService);
exports.ShipmentsService = ShipmentsService;
//# sourceMappingURL=shipments.service.js.map