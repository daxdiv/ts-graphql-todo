import { BsCheckLg, BsFillTrashFill, BsPlusLg } from "react-icons/bs";

const Todo = () => {
    return (
        <div className="flex justify-between items-center p-2">
            <div className="bg-blue-400 rounded-lg p-1 mb-1 last:-mb-1 w-3/4">
                test todo
            </div>
            <div className="grid grid-cols-2 gap-3">
                <BsCheckLg className="cursor-pointer"></BsCheckLg>
                <BsFillTrashFill className="cursor-pointer"></BsFillTrashFill>
            </div>
        </div>
    );
};

export default Todo;
