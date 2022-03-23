import React from "react";

const PopupContext = React.createContext({ visible: false, update: () => {} });

export default PopupContext;
