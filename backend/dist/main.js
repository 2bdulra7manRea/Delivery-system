"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const configs_1 = require("./configs");
const app_module_1 = require("./Modules/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const swagger = new swagger_1.DocumentBuilder()
        .setTitle('Delivery Management System')
        .setDescription('Delivery Management System Apis')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swagger);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(configs_1.default.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map