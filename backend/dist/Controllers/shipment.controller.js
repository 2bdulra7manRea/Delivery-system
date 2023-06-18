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
exports.ShipmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const shipment_dto_1 = require("../dto/shipment.dto");
const shipment_1 = require("../pipes/shipment");
const shipments_service_1 = require("../Services/shipments.service");
let ShipmentController = class ShipmentController {
    constructor(appService) {
        this.appService = appService;
    }
    create(body) {
        return this.appService.createShipment(body);
    }
    receiveShipment(body) {
        return this.appService.receiveShipment(body);
    }
    updateStatus(body) {
        return this.appService.updateShipmentStatus(body);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Shipment' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'create shipment' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'failed to create shipment' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'validation failed' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'authentication failed' }),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new shipment_1.ShipmentValidation()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shipment_dto_1.CreateShipmentDto]),
    __metadata("design:returntype", void 0)
], ShipmentController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/receive'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShipmentController.prototype, "receiveShipment", null);
__decorate([
    (0, common_1.Patch)('/change-status'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShipmentController.prototype, "updateStatus", null);
ShipmentController = __decorate([
    (0, swagger_1.ApiTags)('Shipments'),
    (0, common_1.Controller)('shipments'),
    __metadata("design:paramtypes", [shipments_service_1.ShipmentsService])
], ShipmentController);
exports.ShipmentController = ShipmentController;
//# sourceMappingURL=shipment.controller.js.map