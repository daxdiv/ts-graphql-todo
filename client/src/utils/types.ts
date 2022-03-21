import { ApolloError } from "@apollo/client";
import { DocumentNode } from "graphql";
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

export interface DeleteTodoVars {
    id: number;
}

export interface UpdateTodoVars {
    id: number;
    complete: boolean | undefined;
}

export interface UseQueriesResultLoading {
    state: boolean;
    message: string;
}

export interface UseQueriesResultError {
    info: ApolloError | undefined;
    message: string;
}

export interface UseQueriesResult<T> {
    data: T | undefined;
    error: UseQueriesResultError;
    loading: UseQueriesResultLoading;
}

export interface UseQueriesParams {
    type: DocumentNode;
    errorMessage?: string | undefined;
    loadingMessage?: string | undefined;
}
