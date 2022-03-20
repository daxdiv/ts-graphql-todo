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

export interface CompletedTodosData {
    completedTodos: ITodo[];
}

export interface CreateTodoVars {
    text: string;
}

export interface ModifyTodoVars {
    id: number;
}
