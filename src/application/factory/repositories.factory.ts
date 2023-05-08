import { Injectable, Inject } from '@nestjs/common';
import { ITaskRepository, IUserRepository } from '../../domain/repositories';
import { TaskRepository, UserRepository } from '../../infrastructure/database/repositories';

@Injectable()
export class RepositoriesFactory {
    constructor(
        private readonly userRepositoryFactory: UserRepository,
        private readonly taskRepositoryFactory: TaskRepository
    ) {}

    userRepository(): IUserRepository {
        return this.userRepositoryFactory;
    }

    taskRepository(): ITaskRepository {
        return this.taskRepositoryFactory;
    }

}