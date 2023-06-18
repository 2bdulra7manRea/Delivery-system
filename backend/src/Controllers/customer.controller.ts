import { Controller, Get } from '@nestjs/common';
import { CustomersService } from 'src/Services/customers.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly appService: CustomersService) {}

  @Get()
  getHello(): string {
    return '';
  }
}
