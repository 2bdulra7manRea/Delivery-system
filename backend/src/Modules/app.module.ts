import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from '../Controllers/app.controller';
import { AppService } from '../Services/app.service';
import { ManagerModule } from './manager.module';
import { AgentModule } from './agent.module';
import { CustomerModule } from './customer.module';
import { join } from 'path';
import { ShipmentModule } from './shipment.module';
import { Shipment } from 'src/models/shipment.entity';
import { DeliverySchedule } from 'src/models/deliveryTIme.entity';
import { Signture } from 'src/models/signture.entity';
import { Review } from 'src/models/review.entity';
import { SignturesService } from 'src/Services/signtures.service';
import { ReviewService } from 'src/Services/review.service';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AuthenticationUsersClientsModule } from './authenticationUserAccess.module';
import { Client } from 'src/models/client.entity';
import { Agent } from 'src/models/agent.entity';
import { UserAccess } from 'src/models/user_access';
import { Customer } from 'src/models/customer.entity';
import { HttpExceptionFilter } from 'src/exceptions/httpException.filter';
import configs from '../configs/index';
const configDb: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: configs.DB_URL,
  entities: [
    Shipment,
    DeliverySchedule,
    Signture,
    Review,
    Client,
    Agent,
    UserAccess,
    Customer,
  ],
  synchronize: true,
  useNewUrlParser: true,
  logging: true,
};

@Module({
  imports: [
    ThrottlerModule.forRoot({
      limit: 20,
      ttl: 60,
    }),
    TypeOrmModule.forRoot(configDb),
    AuthenticationUsersClientsModule,
    AgentModule,
    ManagerModule,
    CustomerModule,
    ShipmentModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      useClass: ThrottlerGuard,
      provide: APP_GUARD,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
