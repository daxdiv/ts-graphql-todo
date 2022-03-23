import { TPopupVariant } from "./types";
import React from "react";

const PopupContext = React.createContext({
    visible: false,
    updateState: () => {},
    updateVariant: (v: TPopupVariant) => {},
});

export default PopupContext;
