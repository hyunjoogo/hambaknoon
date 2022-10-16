import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Test from "./component/Test";
import Member from "./member/Member";
import MemberInfo from "./member/MemberInfo";
import SignUp from "./signup/SignUp";
import ModalProvider from "./dialog/ModalProvider";
import Login from "./login/Login";
import Home from "./home/home";
import Navigation from "./component/Navigation";
const AppRouter = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(BrowserRouter, null,
            React.createElement(ModalProvider, null,
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(Navigation, null) }),
                    React.createElement(Route, { path: "/main", element: React.createElement(Home, null) }),
                    React.createElement(Route, { path: "/login", element: React.createElement(Login, null) }),
                    React.createElement(Route, { path: "/signup", element: React.createElement(SignUp, null) }),
                    React.createElement(Route, { path: "/", element: React.createElement(Test, null) }),
                    React.createElement(Route, { path: "/member", element: React.createElement(Member, null) },
                        React.createElement(Route, { path: ":memberId", element: React.createElement(MemberInfo, null) })),
                    React.createElement(Route, { path: "*", element: React.createElement(Navigate, { replace: true, to: "/login" }) }))))));
};
export default AppRouter;
