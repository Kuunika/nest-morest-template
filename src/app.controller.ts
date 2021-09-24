import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LogInterceptor } from './log/interceptors/log.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(LogInterceptor)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
