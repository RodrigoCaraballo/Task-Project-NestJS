import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmPostgresConfigService } from './config/postgres.config';
import { UserEntity } from './entities/user.entity';
import { TaskEntity } from './entities/task.entity';
import { TaskRepository, UserRepository } from './repositories';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService
    }),
    TypeOrmModule.forFeature(
      [
        UserEntity, TaskEntity
      ]
    )
  ],
  providers: [TypeOrmPostgresConfigService, UserRepository, TaskRepository],
  exports: [TypeOrmPostgresConfigService, UserRepository, TaskRepository]
})
export class DatabaseModule {}
