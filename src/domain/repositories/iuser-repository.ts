import { Observable } from "rxjs"

import { IUserModel } from "../models/user.model";

export interface IUserRepository {
    save(user: IUserModel): Observable<IUserModel>;
    getByUid(uid: string): Observable<IUserModel>;
    getById(userId: string): Observable<IUserModel>;
}