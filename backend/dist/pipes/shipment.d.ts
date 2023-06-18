import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ShipmentValidation implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
