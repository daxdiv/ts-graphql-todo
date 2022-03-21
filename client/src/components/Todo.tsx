import { useMutation } from "@apollo/client";
import { BsCheckLg, BsFillTrashFill } from "react-icons/bs";
import DELETE_MUT from "../mutations/delete.mutation";
import UPDATE_MUT from "../mutations/update.mutation";
import ALL_TODOS_QUERY from "../queries/allTodos.query";
import COMPLETED_TODOS_QUERY from "../queries/completedTodos.query";
import { ModifyTodoVars, ITodo } from "../utils/types";

const Todo = ({ id, text }: ITodo) => {
    const [deleteTodoMut] = useMutation<{}, ModifyTodoVars>(DELETE_MUT, {
        variables: { id },
        refetchQueries: [{ query: ALL_TODOS_QUERY }, { query: COMPLETED_TODOS_QUERY }],
    });
    const [updateTodoMut] = useMutation<{}, ModifyTodoVars>(UPDATE_MUT, {
        variables: { id },
        refetchQueries: [{ query: COMPLETED_TODOS_QUERY }],
    });

    const handleDelete = async () => {
        await deleteTodoMut();
    };
    const handleUpdate = async () => {
        await updateTodoMut();
    };

    return (
        <div className="flex justify-between items-center p-2">
            <div className="bg-blue-600 text-white font-bold rounded-lg p-2 mb-1 last:-mb-1 w-3/4 hover:scale-105 transition hover:ring-white hover:ring-1">
                {text}
            </div>
            <div className="grid grid-cols-2 gap-3">
                <BsCheckLg
                    className="cursor-pointer text-white"
                    onClick={handleUpdate}
                ></BsCheckLg>
                <BsFillTrashFill
                    className="cursor-pointer text-white"
                    onClick={handleDelete}
                ></BsFillTrashFill>
            </div>
        </div>
    );
};

export default Todo;
