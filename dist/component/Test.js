import React from 'react';
import { useLocation } from "react-router-dom";
const Test = () => {
    const { pathname } = useLocation();
    return (React.createElement("div", null,
        "This is ",
        pathname));
};
export default Test;
