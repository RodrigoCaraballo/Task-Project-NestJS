import { Observable } from 'rxjs';

import { ITaskModel } from '../models/task.model';

export interface ITaskRepository {
    add(task: ITaskModel): Observable<ITaskModel>;
    get(taskId: string): Observable<ITaskModel>;
    getAll(userId: string): Observable<ITaskModel[]>;
    delete(taskId: string): Observable<boolean>;
}