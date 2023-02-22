import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginService } from './login/login.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
              private readonly loginService: LoginService) {}

  @Get()
  getHello(): void {
    return this.loginService.login();
  }
}
