import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class ShipmentValidation implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
