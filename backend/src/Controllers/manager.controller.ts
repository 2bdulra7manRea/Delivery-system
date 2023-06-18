import { Controller, Get } from '@nestjs/common';

@Controller('managers')
export class ManagerController {
  @Get()
  getHello(): string {
    return '';
  }
}
