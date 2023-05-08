import { Observable, catchError, map, switchMap } from "rxjs";
import { v4 as uuidv4 } from 'uuid';

import { CreateTaskRequest, ITaskModel, ITaskRepository, ITaskService, IUserModel, IUserRepository, UpdateTaskRequest } from "../../domain";
import { RepositoriesFactory } from "../factory";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService implements ITaskService {
    private taskRepository: ITaskRepository;
    private userRepository: IUserRepository;

    constructor(
        private readonly factory: RepositoriesFactory
    ) {
        this.taskRepository = this.factory.taskRepository();
        this.userRepository = this.factory.userRepository();
    }

    addTask(task: CreateTaskRequest): Observable<ITaskModel> {
        return this.userRepository.getById(task.user)
            .pipe(
                switchMap((user: IUserModel) => {
                    const newTask: ITaskModel = {
                        taskId: uuidv4(),
                        title: task.title,
                        description: task.description,
                        completed: task.completed,
                        deadline: task.deadline,
                        user: user
                    }
                    return this.taskRepository.add(newTask)
                        .pipe(
                            map((addedTask: ITaskModel) => addedTask),
                            catchError(error => { throw error })
                        )
                }),
                catchError(error => { throw error })
            )
    }
    getTask(taskId: string): Observable<ITaskModel> {
        return this.taskRepository.get(taskId)
            .pipe(
                map((task: ITaskModel) => task),
                catchError(error => { throw error })
            )
    }
    getAll(userId: string): Observable<ITaskModel[]> {
        return this.taskRepository.getAll(userId)
            .pipe(
                map((tasks: ITaskModel[]) => tasks),
                catchError(error => { throw error })
            )
    }
    updateTask(taskId: string, task: UpdateTaskRequest): Observable<ITaskModel> {
        return this.taskRepository.get(taskId)
            .pipe(
                switchMap((gotTask: ITaskModel) => {
                    const updateTask: ITaskModel = {
                        ...gotTask,
                        ...task,
                        taskId: taskId
                    }
                    return this.taskRepository.add(updateTask)
                        .pipe(
                            map((updatedTask: ITaskModel) => updatedTask),
                            catchError(error => { throw error })
                        )
                }),
                catchError(error => { throw error })
            )
    }
    deleteTask(taskId: string): Observable<boolean> {
        return this.taskRepository.delete(taskId)
            .pipe(
                map((deleted: boolean) => deleted),
                catchError(error => { throw error })
            )
    }

}