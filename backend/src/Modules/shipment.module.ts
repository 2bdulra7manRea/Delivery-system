import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipmentController } from 'src/Controllers/shipment.controller';
import { Agent } from 'src/models/agent.entity';
import { DeliverySchedule } from 'src/models/deliveryTIme.entity';
import { Review } from 'src/models/review.entity';
import { Shipment } from 'src/models/shipment.entity';
import { Signture } from 'src/models/signture.entity';
import { AgentsService } from 'src/Services/agents.service';
import { ReviewService } from 'src/Services/review.service';
import { ScheduleTimeDeliveryService } from 'src/Services/schuduleTimeDelivery.service';
import { ShipmentsService } from 'src/Services/shipments.service';
import { SignturesService } from 'src/Services/signtures.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Shipment,
      Agent,
      DeliverySchedule,
      Review,
      Signture,
    ]),
  ],
  controllers: [ShipmentController],
  providers: [
    ShipmentsService,
    AgentsService,
    ScheduleTimeDeliveryService,
    ReviewService,
    SignturesService,
  ],
})
export class ShipmentModule {}
