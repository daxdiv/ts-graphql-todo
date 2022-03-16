import { gql } from "@apollo/client";

const ALL_TODOS_QUERY = gql`
    {
        allTodos {
            id
            text
            complete
            createdAt
            updatedAt
        }
    }
`;

export default ALL_TODOS_QUERY;
