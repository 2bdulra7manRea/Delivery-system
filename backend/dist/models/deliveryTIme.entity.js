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
exports.DeliverySchedule = void 0;
const typeorm_1 = require("typeorm");
var statusDelivery;
(function (statusDelivery) {
    statusDelivery["NOT_ACTIVE"] = "NOT_ACTIVE";
    statusDelivery["PICK_UP"] = "PICK_UP";
    statusDelivery["ON_PROCESS"] = "ON_PROCESS";
    statusDelivery["ON_DELIVERY"] = "ON_DELIVERY";
    statusDelivery["DELIVERED"] = "DELIVERED";
})(statusDelivery || (statusDelivery = {}));
let DeliverySchedule = class DeliverySchedule {
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", String)
], DeliverySchedule.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DeliverySchedule.prototype, "shipment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: statusDelivery,
        default: statusDelivery.NOT_ACTIVE,
    }),
    __metadata("design:type", String)
], DeliverySchedule.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], DeliverySchedule.prototype, "delivery_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], DeliverySchedule.prototype, "delivery_deadline", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DeliverySchedule.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DeliverySchedule.prototype, "updated_at", void 0);
DeliverySchedule = __decorate([
    (0, typeorm_1.Entity)()
], DeliverySchedule);
exports.DeliverySchedule = DeliverySchedule;
//# sourceMappingURL=deliveryTIme.entity.js.map