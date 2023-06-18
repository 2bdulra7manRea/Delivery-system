import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from 'src/Controllers/customer.controller';
import { Customer } from 'src/models/customer.entity';
import { CustomersService } from 'src/Services/customers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomersService],
})
export class CustomerModule {}
