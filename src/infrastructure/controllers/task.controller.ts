import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { Observable } from "rxjs";

import { CreateTaskRequest, ITaskModel, ITaskService, UpdateTaskRequest } from "../../domain";
import { ServiceFactory } from "../factory/service.factory";

@Controller('task')
export class TaskController {
    private service: ITaskService;

    constructor(
        private readonly factory: ServiceFactory
    ) {
        this.service = this.factory.taskService()
    }

    @Post('add-task')
    addTask(@Body() task: CreateTaskRequest): Observable<ITaskModel> {
        return this.service.addTask(task);
    }

    @Get('get-task/:taskId')
    getTask(@Param('taskId') taskId: string): Observable<ITaskModel> {
        return this.service.getTask(taskId);
    }

    @Get('get-all-task/:userId')
    getAll(@Param('userId') userId: string) : Observable<ITaskModel[]> {
        return this.service.getAll(userId);
    }

    @Put('update-task/:taskId')
    updateTask(@Param('taskId') taskId: string, @Body() task: UpdateTaskRequest): Observable<ITaskModel> {
        return this.service.updateTask(taskId, task);
    }

    @Delete('delete-task/:taskId')
    deleteTask(@Param('taskId') taskId: string): Observable<boolean> {
        return this.service.deleteTask(taskId);
    }
}