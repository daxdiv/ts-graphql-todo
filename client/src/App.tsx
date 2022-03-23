import { useMutation } from "@apollo/client";
import { useState } from "react";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import Todo from "./components/Todo";
import CREATE_MUT from "./mutations/create.mutation";
import ALL_TODOS_QUERY from "./queries/allTodos.query";
import COMPLETED_TODOS_QUERY from "./queries/completedTodos.query";
import useQueries from "./hooks/useQueries";
import {
    ITodo,
    IAllTodosData,
    ICreateTodoVars,
    ICompletedTodosData,
} from "./utils/types";

const App = () => {
    const [todoText, setTodoText] = useState<string>("");
    const [
        { data: todosData, error: todosError, loading: todosLoading },
        {
            data: completedTodosData,
            error: completedTodosError,
            loading: completedTodosLoading,
        },
    ] = useQueries<IAllTodosData & ICompletedTodosData>(
        {
            type: ALL_TODOS_QUERY,
            errorMessage: "Error loading todos",
            loadingMessage: "Loading todos...",
        },
        {
            type: COMPLETED_TODOS_QUERY,
            errorMessage: "Error loading completed todos",
            loadingMessage: "Loading completed todos...",
        }
    );
    const [createTodoMut] = useMutation<ITodo, ICreateTodoVars>(CREATE_MUT, {
        variables: { text: todoText },
        refetchQueries: [{ query: ALL_TODOS_QUERY }],
    });

    if (todosError.info) return <div>{todosError.message}</div>;
    if (completedTodosError.info) return <div>{completedTodosError.message}</div>;
    if (todosLoading.state) return <div>{todosLoading.message}</div>;
    if (completedTodosLoading.state) return <div>{completedTodosLoading.message}</div>;
    if (!todosData || !completedTodosData) return <div>Nothing found</div>;

    const handleCreate = async () => {
        if (!todoText) return;

        await createTodoMut();
    };

    return (
        <div className="flex justify-center flex-col h-screen items-center">
            <div className="flex flex-col bg-blue-700 p-2 rounded-lg ring-1 ring-black w-1/3">
                <div className="flex justify-between p-2 items-center">
                    <input
                        type="text"
                        placeholder="Enter a todo..."
                        value={todoText}
                        onChange={e => {
                            setTodoText(e.currentTarget.value);
                        }}
                        className="w-3/4 bg-white rounded-lg focus:ring-white focus:ring-1 p-1 outline-none"
                    />
                    <div className="grid grid-cols-2 gap-3">
                        <BsPlusLg
                            className="cursor-pointer text-white"
                            onClick={handleCreate}
                        ></BsPlusLg>
                        <BsTrashFill
                            className="cursor-pointer text-white"
                            onClick={() => {
                                setTodoText("");
                            }}
                        ></BsTrashFill>
                    </div>
                </div>
                <div className="mt-4">
                    {todosData.allTodos.map((todo: ITodo) => {
                        return <Todo key={todo.id} {...todo} />;
                    })}
                    {completedTodosData.completedTodos.length !== 0 && (
                        <div className="w-full my-2 border-t-2 border-t-white px-2"></div>
                    )}
                    {completedTodosData.completedTodos.map((todo: ITodo) => {
                        return <Todo key={todo.id} {...todo} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
