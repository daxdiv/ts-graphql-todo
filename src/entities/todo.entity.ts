import { Field, Int, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
@ObjectType()
export default class TodoEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id!: number;

    @Column()
    @Field(() => String)
    text: string;

    @Column()
    @Field(() => Boolean)
    complete: boolean;

    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;

    @UpdateDateColumn()
    @Field(() => Date)
    updatedAt: Date;
}
