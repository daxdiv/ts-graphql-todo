import { gql } from "@apollo/client";

const UPDATE_MUT = gql`
    mutation UpdateTodo($id: Int!) {
        updateTodo(id: $id)
    }
`;

export default UPDATE_MUT;
