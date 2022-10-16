import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Button from "../component/Button";
const Member = () => {
    const [index, setIndex] = useState(false);
    const changeIndex = () => {
        setIndex(prev => !prev);
    };
    return (React.createElement("div", null,
        React.createElement("header", null, "Member Header"),
        React.createElement("span", null, " member/3 \uD558\uAC8C\uB418\uBA74 3\uBC88\uC5D0 \uD574\uB2F9\uB418\uB294 outlet\uC774 \uB098\uC624\uB294\uAD70\uC694"),
        React.createElement(Button, { onClick: changeIndex },
            "\uD604\uC7AC : ",
            index ? 'TRUE' : 'FALSE'),
        index ? React.createElement(Screen1, null) : React.createElement(Screen2, null),
        React.createElement(Outlet, null),
        " "));
};
export default Member;
