import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginDto {
  @ApiProperty()
  password: string;

  @ApiProperty()
  phone_number: string;
}

export class CreateRegisterDto {
  @ApiProperty()
  password: string;
  @ApiProperty()
  phone_number: string;
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  location_address: string;
  @ApiProperty()
  identity_card_number: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  userType: string;
}
