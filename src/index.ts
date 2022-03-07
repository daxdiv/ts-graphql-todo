require("dotenv").config();
import express, { Express, Request, Response } from "express";

const main = async () => {
    const PORT = process.env.PORT;
    const app: Express = express();

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
