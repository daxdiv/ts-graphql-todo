import { ApolloError } from "@apollo/client";
import { DocumentNode } from "graphql";
export interface ITodo {
    id: number;
    text: string;
    complete?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IAllTodosData {
    allTodos: ITodo[];
}

export interface ICompletedTodosData {
    completedTodos: ITodo[];
}

export interface ICreateTodoVars {
    text: string;
}

export interface IDeleteTodoVars {
    id: number;
}

export interface IUpdateTodoVars {
    id: number;
    complete: boolean | undefined;
}

export interface IUseQueriesResultLoading {
    state: boolean;
    message: string;
}

export interface IUseQueriesResultError {
    info: ApolloError | undefined;
    message: string;
}

export interface IUseQueriesResult<T> {
    data: T | undefined;
    error: IUseQueriesResultError;
    loading: IUseQueriesResultLoading;
}

export interface IUseQueriesParams {
    type: DocumentNode;
    errorMessage?: string | undefined;
    loadingMessage?: string | undefined;
}
