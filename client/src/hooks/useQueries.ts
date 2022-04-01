import { useQuery } from "@apollo/client";
import type { IUseQueriesParams, IUseQueriesResult } from "../utils/types";

const useQueries = <T>(...queries: IUseQueriesParams[]): IUseQueriesResult<T>[] => {
    return queries.map(query => {
        const { data, loading, error } = useQuery<T>(query.type);

        if (error) {
            return {
                data: undefined,
                error: {
                    info: error,
                    message: query.errorMessage ?? "Error",
                },
                loading: {
                    state: loading,
                    message: "",
                },
            };
        }
        if (loading) {
            return {
                data: undefined,
                error: {
                    info: error,
                    message: "",
                },
                loading: {
                    state: loading,
                    message: query.loadingMessage ?? "Loading...",
                },
            };
        }
        return {
            data,
            error: {
                info: error,
                message: "",
            },
            loading: {
                state: loading,
                message: "",
            },
        };
    });
};

export default useQueries;
