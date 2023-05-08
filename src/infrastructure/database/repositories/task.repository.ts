import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Observable, from, map, catchError } from "rxjs";

import { TaskEntity } from "../entities/task.entity";
import { ITaskRepository } from "../../../domain/repositories";
import { ITaskModel } from "../../../domain/models";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskRepository implements ITaskRepository {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly taskRepository: Repository<TaskEntity>
    ) {}

    add(task: ITaskModel): Observable<ITaskModel> {
        return from(this.taskRepository.save(task))
        .pipe(
            map((task: ITaskModel) => task),
            catchError((error: Error) => {throw error})
        )
    }
    get(taskId: string): Observable<ITaskModel> {
        return from(this.taskRepository.findOneBy({taskId}))
        .pipe(
            map((task: ITaskModel) => task),
            catchError((error: Error) => {throw error})
        )
    }
    getAll(userId: string): Observable<ITaskModel[]> {
        return from(this.taskRepository.find({
                where: {
                    user: {
                        userId: userId
                    }
                }
            }))
            .pipe(
                map((tasks: ITaskModel[]) => tasks),
                catchError((error: Error) => {throw error})
            )
    }
    delete(taskId: string): Observable<boolean> {
        return from(this.taskRepository.delete({taskId}))
        .pipe(
            map((result: DeleteResult) => result.affected > 0),
            catchError((error: Error) => {throw error})
        )
    }


}