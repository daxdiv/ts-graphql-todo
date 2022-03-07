import { Query, Resolver } from "type-graphql";

@Resolver()
export default class TodoResolver {
    @Query(() => String)
    hello(): string {
        return "hello, world";
    }
}
