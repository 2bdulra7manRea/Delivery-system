import { InjectRepository } from '@nestjs/typeorm';
import { UserAccess } from 'src/models/user_access';
import { MongoRepository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { ACCESS_STATUS } from 'src/enum/accessStatus';

export class UserAccessService {
  private SALT_ROUND = 13;

  constructor(
    @InjectRepository(UserAccess)
    private userAccessModel: MongoRepository<UserAccess>,
    private jwtService: JwtService,
  ) {}

  async initAccessForUser(clientId, userType, phone_number, password) {
    const hashed = await this.hashPassword(password);

    const token = this.generateToken({
      clientId,
      userType,
      date: new Date(),
    });

    await this.userAccessModel.insert({
      access_token: token,
      password: hashed,
      user_id: clientId,
      user_type: userType,
      phone_number: phone_number,
      last_access_date: new Date(),
      access_status: ACCESS_STATUS.LOGGED_IN,
    });
    return { access_token: token, userType };
  }

  async authenticateUser(phone_number, password) {
    const user = await this.userAccessModel.findOne({
      where: { phone_number },
    });
    if (!user) {
      throw new UnauthorizedException();
    }

    if (user.is_blocked) {
      throw new ForbiddenException();
    }

    const isMatched = await this.validatePassword(password, user.password);

    if (!isMatched) {
      throw new UnauthorizedException();
    }

    const token = this.generateToken({
      clienId: user.user_id,
      userType: user.user_type,
      date: new Date(),
    });

    await this.userAccessModel.updateOne(
      { user_id: user.user_id },
      {
        access_token: token,
        last_access_date: new Date(),
        access_status: ACCESS_STATUS.LOGGED_IN,
      },
    );

    return { access_token: token, userType: user.user_id };
  }

  logout(user_id) {
    return this.userAccessModel.updateOne(
      { user_id },
      {
        last_access_date: new Date(),
        access_status: ACCESS_STATUS.LOGGED_OUT,
      },
    );
  }

  private async hashPassword(password) {
    return await bcrypt.hash(password, this.SALT_ROUND);
  }

  private validatePassword(password, hashed) {
    return bcrypt.compare(password, hashed);
  }

  private generateToken(data) {
    return this.jwtService.sign(data);
  }

  public decodeToken(token: string): any {
    const jwt = token.replace('Bearer', '');
    return this.jwtService.decode(jwt, { json: true });
  }
}
