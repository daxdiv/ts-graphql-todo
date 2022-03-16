import { useQuery } from "@apollo/client";
import { useState } from "react";
import { BsFillTrashFill, BsPlusLg } from "react-icons/bs";
import Todo from "./components/Todo";
import ALL_TODOS_QUERY from "./queries/allTodos.query";
import { ITodo } from "./utils/types";

const App = () => {
    const [todoText, setTodoText] = useState<string>("");
    const { data, error, loading } = useQuery(ALL_TODOS_QUERY);

    if (error) return <div>Error</div>;
    if (loading) return <div>Loading...</div>;
    if (!data) return <div>Todos not found</div>;

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
                        <BsPlusLg className="cursor-pointer text-white"></BsPlusLg>
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
                        return <Todo id={todo.id} text={todo.text} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
