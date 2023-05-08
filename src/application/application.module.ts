import { Module } from '@nestjs/common';
import { SecurityService, TaskService } from './services';
import { RepositoriesFactory } from './factory';
import { DatabaseModule } from '../infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [RepositoriesFactory, SecurityService, TaskService],
  exports: [RepositoriesFactory, SecurityService, TaskService]
})
export class ApplicationModule { }
