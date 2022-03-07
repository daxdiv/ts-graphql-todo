require("dotenv").config();
import "reflect-metadata";
import express, { Express, Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground as ApolloServerGraphQLPlayground } from "apollo-server-core";
import TodoResolver from "./resolvers/todo.resolver";

const main = async () => {
    const PORT = process.env.PORT;
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [TodoResolver],
            validate: false,
        }),
        plugins: [ApolloServerGraphQLPlayground],
    });

    await apolloServer.start();
    const app: Express = express();

    apolloServer.applyMiddleware({ app });

    app.get("/", (_req: Request, res: Response) => {
        res.status(200).send("hello, world");
    });

    app.listen(PORT || 8000, () => {
        console.log(`server running at port ${PORT}`);
    });
};

main().catch(err => {
    console.error(err);
});
