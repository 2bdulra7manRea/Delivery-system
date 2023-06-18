import { Customer } from 'src/models/customer.entity';
import { MongoRepository } from 'typeorm';
export declare class CustomersService {
    private customerModel;
    constructor(customerModel: MongoRepository<Customer>);
    create(client_id: any, service_type: any, routes: any): Promise<void>;
}
