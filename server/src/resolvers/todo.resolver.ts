import TodoEntity from "../entities/todo.entity";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export default class TodoResolver {
    @Query(() => TodoEntity, { nullable: true })
    todo(@Arg("id", () => Int) id: number): Promise<TodoEntity | undefined> {
        return TodoEntity.findOne({ id });
    }

    @Query(() => [TodoEntity], { nullable: true })
    allTodos(): Promise<TodoEntity[]> {
        return TodoEntity.find({ where: { complete: false } });
    }

    @Query(() => [TodoEntity], { nullable: true })
    completedTodos(): Promise<TodoEntity[]> {
        return TodoEntity.find({
            where: {
                complete: true,
            },
        });
    }

    @Mutation(() => TodoEntity)
    createTodo(@Arg("text", () => String) text: string): Promise<TodoEntity> {
        return TodoEntity.create({ text, complete: false }).save();
    }

    @Mutation(() => Boolean, { nullable: true })
    deleteTodo(@Arg("id", () => Int) id: number): boolean {
        try {
            TodoEntity.delete({ id });

            return true;
        } catch {
            return false;
        }
    }

    @Mutation(() => Boolean, { nullable: true })
    updateTodo(
        @Arg("id", () => Int) id: number,
        @Arg("complete", () => Boolean) complete: boolean
    ): boolean {
        try {
            TodoEntity.update({ id }, { complete: complete ? false : true });

            return true;
        } catch {
            return false;
        }
    }
}
