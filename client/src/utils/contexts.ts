import { TPopupVariant } from "./types";
import React from "react";

const PopupContext = React.createContext({
    visible: false,
    updateVariant: (v: TPopupVariant) => {},
    updateText: (t: string) => {},
    updateTransition: () => {},
});

export default PopupContext;
