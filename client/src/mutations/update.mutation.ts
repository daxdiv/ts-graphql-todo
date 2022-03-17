import { gql } from "@apollo/client";

const UPDATE_MUT = gql`
    mutation UpdateTodo($id: Int!, $complete: Boolean!) {
        updateTodo(id: $id, complete: $complete, text: $text)
    }
`;

export default UPDATE_MUT;
