require("dotenv").config();
import "reflect-metadata";
import express, { Express, Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground as ApolloServerGraphQLPlayground } from "apollo-server-core";
import TodoResolver from "./resolvers/todo.resolver";
import { createConnection } from "typeorm";
import { _production } from "./const";
import TodoEntity from "./entities/todo.entity";
import cors from "cors";

const main = async () => {
    await createConnection({
        type: "mysql",
        host: process.env.DB_HOST || "localhost",
        port: 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [TodoEntity],
        logging: !_production,
        synchronize: true,
        // dropSchema: true,
    });

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

    app.use(
        cors({
            credentials: true,
            origin: ["http://localhost:3000"],
        })
    );
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
