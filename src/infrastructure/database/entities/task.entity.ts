import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('tasks', {schema: 'public'})
export class TaskEntity {

    @PrimaryColumn(
        'uuid',
        {
            primary: true,
            name: 'task_id'
        }
    )
    taskId: string;

    @Column('character varying', {name: 'task_title', length: 255, nullable: false})
    title: string;

    @Column('character varying', {name: 'task_description', length: 255, nullable: true})
    description: string;

    @Column('timestamp', {name: 'task_deadline', nullable: false})
    deadline: Date;

    @Column('boolean', {name:'task_completed', nullable: false})
    completed: boolean;

    // @Column('character varying', {name: 'task_user_id', length: 255, nullable: false})
    @ManyToOne(() => UserEntity, u => u.userId)
    user: UserEntity;
}