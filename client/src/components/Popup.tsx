import { useContext } from "react";
import PopupContext from "../utils/contexts";
import { IPopup } from "../utils/types";
import { BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";

enum PopupVariantStyles {
    success = "bg-green-500",
    error = "bg-red-500",
}

const Popup = ({ text, variant }: IPopup) => {
    const { visible, updateState } = useContext(PopupContext);

    return (
        <div
            className={`absolute top-3 -right-0 transition-transform rounded-lg p-1 text-white font-bold flex justify-between items-center content-center ${
                visible ? "" : "translate-x-96"
            } ${PopupVariantStyles[variant]}`}
        >
            {text}
            <BsCheckLg className="ml-4"></BsCheckLg>
        </div>
    );
};

export default Popup;
