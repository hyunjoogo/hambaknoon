import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Test from "./component/Test";
import Member from "./member/Member";
import MemberInfo from "./member/MemberInfo";
import SignUp from "./signup/SignUp";
import TodoList from "./RecoilTest/TodoList";
import ModalTest from "./modal-test/ModalTest";
import ModalProvider from "./dialog/ModalProvider";
const AppRouter = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(BrowserRouter, null,
            React.createElement(ModalProvider, null,
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/main", element: React.createElement(TodoList, null) }),
                    React.createElement(Route, { path: "/login", element: React.createElement(ModalTest, null) }),
                    React.createElement(Route, { path: "/signup", element: React.createElement(SignUp, null) }),
                    React.createElement(Route, { path: "/", element: React.createElement(Test, null) }),
                    React.createElement(Route, { path: "/member", element: React.createElement(Member, null) },
                        React.createElement(Route, { path: ":memberId", element: React.createElement(MemberInfo, null) })),
                    React.createElement(Route, { path: "*", element: React.createElement(Navigate, { replace: true, to: "/login" }) }))))));
};
export default AppRouter;
