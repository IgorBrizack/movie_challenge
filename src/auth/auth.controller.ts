import { Controller, UseGuards, Request, Body, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginDto';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Login Authorization')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() req: LoginDto) {
    return this.authService.login(req);
  }
}
