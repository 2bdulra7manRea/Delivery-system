import {
  Body,
  Controller,
  Headers,
  Patch,
  Post,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLoginDto, CreateRegisterDto } from 'src/dto/auth.dto';
import { GeneralExceptionFilter } from 'src/exceptions/generalException.filter';
import { AuthPipe } from 'src/pipes/auth.pipe';
import { loginSchema, registerSchema } from 'src/schema/auth.schema';
import { AuthenticationUsersClients } from 'src/Services/authentication.service';

@ApiTags('Auth')
@Controller('/client/auth')
export class AuthenticationUsersClientsController {
  constructor(private readonly appService: AuthenticationUsersClients) {}

  @Post('/login')
  @UsePipes(new AuthPipe(loginSchema))
  login(@Body() body: CreateLoginDto) {
    return this.appService.login(body);
  }

  @Post('/register')
  @UsePipes(new AuthPipe(registerSchema))
  @UseFilters(new GeneralExceptionFilter())
  async register(@Body() body: CreateRegisterDto) {
    return this.appService.registerClients(body);
  }

  @Patch('/logout')
  logout(@Headers('Authorization') auth: string) {
    return this.appService.logout(auth);
  }
}
