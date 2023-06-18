import { CustomersService } from 'src/Services/customers.service';
export declare class CustomerController {
    private readonly appService;
    constructor(appService: CustomersService);
    getHello(): string;
}
