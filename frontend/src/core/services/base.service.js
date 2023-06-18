
import { configs } from "../../configs/index"

export default class BaseApiService{
    endpoint;
    baseUrl = configs.SERVER_BASE_URL + this.endpoint
    
    constructor(endpoint) {
        this.endpoint = endpoint;

}


    get() { }
    
    create() { }
    
    update() { }
    
    deleteReq() { }
    

}