import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class GeneralExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
