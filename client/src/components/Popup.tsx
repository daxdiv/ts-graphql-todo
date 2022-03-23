import { useContext } from "react";
import PopupContext from "../utils/contexts";

const Popup = () => {
    const { visible, update } = useContext(PopupContext);

    return (
        <div
            className={`absolute top-0 -right-7 transition-transform ${
                visible ? "-translate-x-10" : "translate-x-36"
            }`}
            onClick={update}
        >
            Popup
        </div>
    );
};

export default Popup;
