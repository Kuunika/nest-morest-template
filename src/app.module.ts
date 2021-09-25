import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { API_MONGODB_URI } from './common/constants';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (service: ConfigService) => ({
        uri: service.get<string>(API_MONGODB_URI),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
