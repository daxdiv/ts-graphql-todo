import { gql } from "@apollo/client";

const CREATE_MUT = gql`
    mutation CreateTodo($text: String!) {
        createTodo(text: $text) {
            text
            id
            complete
            updatedAt
            createdAt
        }
    }
`;

export default CREATE_MUT;
