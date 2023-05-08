import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, from, map, catchError, switchMap } from 'rxjs';

import { UserEntity } from '../entities/user.entity';
import { IUserModel } from '../../../domain/models';
import { IUserRepository } from '../../../domain/repositories';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    save(user: IUserModel): Observable<IUserModel> {
        return from(this.userRepository.findOneBy({ userId: user.userId }))
            .pipe(
                switchMap((validation) => {
                    if (!validation) {
                        return from(this.userRepository.save(user))
                            .pipe(
                                map((userEntity: IUserModel) => userEntity),
                                catchError(error => { throw error })
                            )
                    }
                }),
                catchError(error => { throw error })
            )
    }

    getByUid(uid: string): Observable<IUserModel> {
        return from(this.userRepository.findOneBy({ uid }))
            .pipe(
                map((userEntity: IUserModel) => userEntity),
                catchError(error => { throw error })
            )
    }

    getById(userId: string): Observable<IUserModel> {
        return from(this.userRepository.findOneBy({ userId }))
            .pipe(
                map((userEntity: IUserModel) => userEntity),
                catchError(error => { throw error })
            )
    }

}