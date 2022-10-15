import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Test from "./component/Test";
// import Navigation from "./component/Navigation";
import Member from "./member/Member";
import MemberInfo from "./member/MemberInfo";
import SignUp from "./signup/SignUp";
import ModalTest from "./modal-test/ModalTest";
import ModalProvider from "./dialog/ModalProvider";
import Login from "./login/Login";

const AppRouter = () => {
  // TODO Lazy Loading으로 바꿀 것
  return (
    <>
      <BrowserRouter>
        <ModalProvider>
          {/*<Navigation/>*/}
          <Routes>
            <Route path="/main" element={<ModalTest/>}/>
            {/*<Route path="/modal" element={<ModalTest/>}/>*/}
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>

            <Route path="/" element={<Test/>}/>
            <Route path="/member" element={<Member/>}>
              <Route path=":memberId" element={<MemberInfo/>}/>
            </Route>
            <Route path="*" element={<Navigate replace to="/login"/>}/>
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
