import { gql } from "@apollo/client";

const COMPLETED_TODOS_QUERY = gql`
    query CompletedTodos($complete: Boolean!) {
        completedTodos(complete: $complete) {
            id
            text
            complete
            createdAt
            updatedAt
        }
    }
`;

export default COMPLETED_TODOS_QUERY;
