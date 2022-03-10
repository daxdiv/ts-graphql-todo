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

    @Mutation(() => TodoEntity)
    createTodo(@Arg("text", () => String) text: string): Promise<TodoEntity> {
        return TodoEntity.create({ text, complete: false }).save();
    }

    @Mutation(() => Boolean, { nullable: true })
    deleteTodo(@Arg("id", () => Int) id: number): boolean | undefined {
        const todo = TodoEntity.findOne({ id });

        if (!todo) {
            return undefined;
        }

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
        @Arg("text", () => String) text: string,
        @Arg("complete", { defaultValue: false }) complete: boolean
    ): boolean | undefined {
        const todo = TodoEntity.findOne({ id: id });

        if (!todo) {
            return undefined;
        }

        try {
            TodoEntity.update({ id }, { text, complete });

            return true;
        } catch {
            return false;
        }
    }
}
