import { Observable } from 'rxjs';

import { CreateUserRequest } from '../interfaces';

export interface ISecurityService {
    signIn(uid: string): Observable<string>;
    signUp(user: CreateUserRequest): Observable<string>;
}