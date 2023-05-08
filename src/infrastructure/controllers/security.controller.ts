import { Body, Controller, Inject, Param, Post } from "@nestjs/common";
import { Observable } from "rxjs";

import { CreateUserRequest, ISecurityService } from "../../domain";
import { ServiceFactory } from "../factory/service.factory";

@Controller('security')
export class SecurityController {
    private service: ISecurityService;

    constructor(
        private readonly factory: ServiceFactory
    ) {
        this.service = this.factory.securityService()
    }

    @Post('sign-in/:uid')
    signIn(@Param('uid') uid: string): Observable<string> {
        return this.service.signIn(uid);
    }

    @Post('sign-up')
    signUp(@Body() user: CreateUserRequest): Observable<string> {
        return this.service.signUp(user);
    }
}