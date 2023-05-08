import { Observable, map } from 'rxjs';
import * as jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';

import { IUserModel, IUserRepository, ISecurityService, CreateUserRequest } from "../../domain";
import { RepositoriesFactory } from "../factory";
import { Injectable } from '@nestjs/common';

@Injectable()
export class SecurityService implements ISecurityService {
    private userRepository: IUserRepository

    constructor(
        private readonly factory: RepositoriesFactory
    ) {
        this.userRepository = this.factory.userRepository();
    }

    signIn(uid: string): Observable<string> {
        return this.userRepository.getByUid(uid)
            .pipe(
                map((user: IUserModel) => {
                    const payload = {
                        userId: user.userId,
                        uid: user.uid,
                        username: user.username,
                    }

                    return jwt.sign(payload, process.env.SECRET_KEY || 'Encrypt')
                })
            )
    }
    signUp(user: CreateUserRequest): Observable<string> {
        const newUser: IUserModel = {
            userId: uuidv4(),
            uid: user.uid,
            username: user.username
        }

        return this.userRepository.save(newUser)
            .pipe(
                map((user: IUserModel) => {
                    const payload = {
                        userId: user.userId,
                        uid: user.uid,
                        username: user.username,
                    }

                    return jwt.sign(payload, process.env.SECRET_KEY || 'Encrypt')
                })
            )
    }

}