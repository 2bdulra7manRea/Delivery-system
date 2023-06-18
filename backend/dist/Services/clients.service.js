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
exports.ClientService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../models/client.entity");
const typeorm_2 = require("typeorm");
let ClientService = class ClientService {
    constructor(clientRepos) {
        this.clientRepos = clientRepos;
    }
    async create(client) {
        var _a;
        const result = await this.clientRepos.insert(client);
        return { clientId: (_a = result.identifiers[0]) === null || _a === void 0 ? void 0 : _a._id };
    }
    async isBlocked() {
        return;
    }
};
ClientService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=clients.service.js.map