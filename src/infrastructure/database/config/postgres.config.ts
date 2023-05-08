import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { TypeOrmOptionsFactory } from "@nestjs/typeorm/dist";
import { ConfigService } from '@nestjs/config'
import { UserEntity, TaskEntity } from "../entities";

@Injectable()
export class TypeOrmPostgresConfigService implements TypeOrmOptionsFactory {

    constructor(private readonly configService: ConfigService) {}
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'postgres',
            name: connectionName,
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),
            entities: [UserEntity, TaskEntity],
            synchronize: true,
            logging: true,
        }
    }
}