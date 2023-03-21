import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './resources/auth/local-auth.guard';
import { AuthService } from './resources/auth/auth.service';

@Controller('api/v1')
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
