import { ApiProperty } from '@nestjs/swagger';

export class CreateShipmentDto {
  @ApiProperty()
  agent_id: string;

  @ApiProperty()
  customer_id: string;

  @ApiProperty()
  note: string;
  @ApiProperty({ nullable: true })
  route_id: string;
}
