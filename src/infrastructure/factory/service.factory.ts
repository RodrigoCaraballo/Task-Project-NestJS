import { Injectable } from "@nestjs/common";
import { SecurityService, TaskService } from "../../application/services";
import { ISecurityService, ITaskService } from "../../domain";

@Injectable()
export class ServiceFactory {
    constructor(
        private readonly securityServiceFactory: SecurityService,
        private readonly taskServiceFactory: TaskService,
    ) {}

    securityService(): ISecurityService {
        return this.securityServiceFactory;
    }

    taskService(): ITaskService {
        return this.taskServiceFactory;
    }

}