export interface ITodo {
    id: number;
    text: string;
    complete?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AllTodosData {
    allTodos: ITodo[];
}

export interface CreateTodoVars {
    text: string;
}

export interface DeleteTodoVars {
    id: number;
}

export interface UpdateTodoVars {
    id: number;
    complete: boolean | undefined;
}
