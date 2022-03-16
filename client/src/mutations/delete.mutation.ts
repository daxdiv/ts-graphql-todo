import { gql } from "@apollo/client";

const DELETE_MUT = gql`
    mutation DeleteTodo($id: Int!) {
        deleteTodo(id: $id)
    }
`;

export default DELETE_MUT;
