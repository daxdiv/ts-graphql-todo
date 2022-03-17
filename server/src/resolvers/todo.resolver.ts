import TodoEntity from "../entities/todo.entity";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export default class TodoResolver {
    @Query(() => TodoEntity, { nullable: true })
    todo(@Arg("id", () => Int) id: number): Promise<TodoEntity | undefined> {
        return TodoEntity.findOne({ id });
    }

    @Query(() => [TodoEntity])
    allTodos(): Promise<TodoEntity[]> {
        return TodoEntity.find({});
    }

    @Query(() => [TodoEntity], { nullable: true })
    completedTodos(
        @Arg("complete", () => Boolean) complete: boolean = true
    ): Promise<TodoEntity[]> {
        return TodoEntity.find({
            where: {
                complete,
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
    updateTodo(@Arg("id", () => Int) id: number): boolean {
        try {
            TodoEntity.update({ id }, { complete: true });

            return true;
        } catch {
            return false;
        }
    }
}
