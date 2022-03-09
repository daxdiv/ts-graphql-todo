import TodoEntity from "../entities/todo.entity";
import { Arg, Int, Query, Resolver } from "type-graphql";

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
}
