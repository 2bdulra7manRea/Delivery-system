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
exports.AuthenticationUsersClientsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_dto_1 = require("../dto/auth.dto");
const generalException_filter_1 = require("../exceptions/generalException.filter");
const auth_pipe_1 = require("../pipes/auth.pipe");
const auth_schema_1 = require("../schema/auth.schema");
const authentication_service_1 = require("../Services/authentication.service");
let AuthenticationUsersClientsController = class AuthenticationUsersClientsController {
    constructor(appService) {
        this.appService = appService;
    }
    login(body) {
        return this.appService.login(body);
    }
    async register(body) {
        return this.appService.registerClients(body);
    }
    logout(auth) {
        return this.appService.logout(auth);
    }
};
__decorate([
    (0, common_1.Post)('/login'),
    (0, common_1.UsePipes)(new auth_pipe_1.AuthPipe(auth_schema_1.loginSchema)),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.CreateLoginDto]),
    __metadata("design:returntype", void 0)
], AuthenticationUsersClientsController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UsePipes)(new auth_pipe_1.AuthPipe(auth_schema_1.registerSchema)),
    (0, common_1.UseFilters)(new generalException_filter_1.GeneralExceptionFilter()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.CreateRegisterDto]),
    __metadata("design:returntype", Promise)
], AuthenticationUsersClientsController.prototype, "register", null);
__decorate([
    (0, common_1.Patch)('/logout'),
    __param(0, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthenticationUsersClientsController.prototype, "logout", null);
AuthenticationUsersClientsController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('/client/auth'),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationUsersClients])
], AuthenticationUsersClientsController);
exports.AuthenticationUsersClientsController = AuthenticationUsersClientsController;
//# sourceMappingURL=authentication.controller.js.map