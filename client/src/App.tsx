import { BsFillTrashFill, BsPlusLg } from "react-icons/bs";
import Todo from "./components/Todo";

const App = () => {
    return (
        <div className="flex justify-center flex-col h-screen items-center">
            <div className="flex flex-col bg-cyan-300 p-2 rounded-lg ring-1 ring-black w-1/3">
                <div className="flex justify-between p-2 items-center">
                    <input
                        type="text"
                        placeholder="Enter a todo..."
                        className="w-3/4 bg-white rounded-lg focus:ring-black focus:ring-1 p-1 outline-none"
                    />
                    <div className="grid grid-cols-2 gap-3">
                        <BsPlusLg className="cursor-pointer"></BsPlusLg>
                        <BsFillTrashFill className="cursor-pointer"></BsFillTrashFill>
                    </div>
                </div>
                <div className="mt-4">
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                </div>
            </div>
        </div>
    );
};

export default App;
