import { IPopupContext } from "./types";
import React from "react";

const PopupContext = React.createContext<IPopupContext>({
    visible: false,
    updateTransition: () => {},
    dispatch: () => {},
});

export default PopupContext;
