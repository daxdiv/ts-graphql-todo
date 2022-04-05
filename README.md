# Typescript GraphQL TODO APP

Simple TODO app in [Vite](https://vitejs.dev) with [TypeScript](https://www.typescriptlang.org) and [GraphQL](https://graphql.org).

## Usage

-   Clone this repository

```bash
git clone https://github.com/daxdiv/ts-graphql-todo.git
```

##### Run the server

-   MySQL database is required

    -   Create a .env file in `server` directory
    -   Put there your database settings

        ```bash
        PORT=8000
        DB_HOST=
        DB_USERNAME=
        DB_PASSWORD=
        DB_NAME=
        ```

-   Run the following commands

    ```bash
    cd server
    npm install
    npm run dev
    ```

## Run Vite client

Run the following commands

```bash
cd client
npm install
npm run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
