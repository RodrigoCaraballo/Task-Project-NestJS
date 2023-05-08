import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: join('.dev.env')
  }),
    InfrastructureModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
