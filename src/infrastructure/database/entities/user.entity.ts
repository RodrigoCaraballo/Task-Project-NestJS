import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Users', { schema: 'public' })
export class UserEntity {

    @PrimaryColumn(
        'uuid',
        {
            primary: true,
            name: 'user_id'
        }
    )
    userId: string

    @Column('character varying', {name: 'user_uid', length: 255, nullable: false, unique: true})
    uid: string;

    @Column('character varying', {name: 'user_username', length: 45, nullable: false, unique: true})
    username: string;
}