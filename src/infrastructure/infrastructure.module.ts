import { Module } from '@nestjs/common';
import { SecurityController, TaskController } from './controllers';
import { ApplicationModule } from '../application/application.module';
import { ServiceFactory } from './factory/service.factory';

@Module({
  imports: [ApplicationModule],
  controllers: [SecurityController, TaskController],
  providers: [ServiceFactory],
})
export class InfrastructureModule {}
