import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import redis from 'src/lib/cache';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userEmail: string, userPassword: string) {
    const user = await this.usersService.getByEmail(userEmail);
    if (user && user.password === userPassword) {
      const { id, name, email } = user;
      return { id, name, email };
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: `Bearer ${this.jwtService.sign(payload)}`,
    };
  }
}