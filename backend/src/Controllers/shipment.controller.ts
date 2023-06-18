import { Body, Controller, Get, Patch, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateShipmentDto } from 'src/dto/shipment.dto';
import { ShipmentValidation } from 'src/pipes/shipment';
import { ShipmentsService } from 'src/Services/shipments.service';

@ApiTags('Shipments')
@Controller('shipments')
export class ShipmentController {
  constructor(private readonly appService: ShipmentsService) {}

  @ApiOperation({ summary: 'Create Shipment' })
  @ApiResponse({ status: 201, description: 'create shipment' })
  @ApiResponse({ status: 401, description: 'failed to create shipment' })
  @ApiResponse({ status: 400, description: 'validation failed' })
  @ApiResponse({ status: 403, description: 'authentication failed' })
  @Post()
  @UsePipes(new ShipmentValidation())
  create(@Body() body: CreateShipmentDto) {
    return this.appService.createShipment(body);
  }

  @Patch('/receive')
  receiveShipment(@Body() body: any) {
    return this.appService.receiveShipment(body);
  }

  @Patch('/change-status')
  updateStatus(@Body() body: any) {
    return this.appService.updateShipmentStatus(body);
  }
}
