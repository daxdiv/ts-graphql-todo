import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { BsFillTrashFill, BsPlusLg } from "react-icons/bs";
import Todo from "./components/Todo";
import CREATE_MUT from "./mutations/create.mutation";
import ALL_TODOS_QUERY from "./queries/allTodos.query";
import COMPLETED_TODOS_QUERY from "./queries/completedTodos.query";
import { ITodo, AllTodosData, CreateTodoVars, CompletedTodosData } from "./utils/types";

const App = () => {
    const [todoText, setTodoText] = useState<string>("");
    const { data, error, loading } = useQuery<AllTodosData>(ALL_TODOS_QUERY);
    const {
        data: dataCompletedTodos,
        error: errorCompletedTodos,
        loading: loadingCompletedTodos,
    } = useQuery<CompletedTodosData>(COMPLETED_TODOS_QUERY, {
        variables: { complete: true },
    });
    const [createTodoMut] = useMutation<ITodo, CreateTodoVars>(CREATE_MUT, {
        variables: { text: todoText },
        refetchQueries: [{ query: ALL_TODOS_QUERY }],
    });

    if (error) return <div>Error loading todos</div>;
    if (loading) return <div>Loading todos...</div>;
    if (!data) return <div>Todos not found</div>;

    if (errorCompletedTodos) return <div>Error loading completed todos</div>;
    if (loadingCompletedTodos) return <div>Loading completed todos...</div>;
    if (!dataCompletedTodos) return <div>Completed Todos not found</div>;

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
                        <BsFillTrashFill
                            className="cursor-pointer text-white"
                            onClick={() => {
                                setTodoText("");
                            }}
                        ></BsFillTrashFill>
                    </div>
                </div>
                <div className="mt-4">
                    {data.allTodos.map((todo: ITodo) => {
                        return <Todo key={todo.id} {...todo} />;
                    })}
                    <div className="w-full my-2 border-t-2 border-t-white px-2"></div>
                    {dataCompletedTodos?.completedTodos.map((todo: ITodo) => {
                        return <Todo key={todo.id} {...todo} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
