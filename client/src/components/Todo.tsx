import { BsCheckLg, BsFillTrashFill, BsPlusLg } from "react-icons/bs";
import { ITodo } from "../utils/types";

const Todo = ({ id, text }: ITodo) => {
    return (
        <div className="flex justify-between items-center p-2">
            <div className="bg-blue-600 text-white font-bold rounded-lg p-2 mb-1 last:-mb-1 w-3/4 hover:scale-105 transition hover:ring-white hover:ring-1">
                {text}
            </div>
            <div className="grid grid-cols-2 gap-3">
                <BsCheckLg className="cursor-pointer text-white"></BsCheckLg>
                <BsFillTrashFill className="cursor-pointer text-white"></BsFillTrashFill>
            </div>
        </div>
    );
};

export default Todo;
