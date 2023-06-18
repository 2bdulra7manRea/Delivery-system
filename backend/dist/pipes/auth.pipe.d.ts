import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';
export declare class AuthPipe implements PipeTransform {
    private schema;
    constructor(schema: ObjectSchema);
    transform(value: any, metadata: ArgumentMetadata): any;
}
