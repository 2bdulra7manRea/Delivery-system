import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/models/customer.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerModel: MongoRepository<Customer>,
  ) {}

  async create(client_id, service_type, routes) {
    this.customerModel.insert({ client_id, service_type });
  }
}
