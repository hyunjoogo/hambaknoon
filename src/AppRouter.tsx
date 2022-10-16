import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./component/Test";
// import Navigation from "./component/Navigation";
import Member from "./member/Member";
import MemberInfo from "./member/MemberInfo";
import SignUp from "./signup/SignUp";
import ModalProvider from "./dialog/ModalProvider";
import Login from "./login/Login";
import Home from "./home/home";
import Navigation from "./component/Navigation";

const AppRouter = () => {
  // TODO Lazy Loading으로 바꿀 것
  return (
    <>
      <BrowserRouter basename="/hambaknoon"/>
        <ModalProvider>
          {/*<Navigation/>*/}
          <Routes>
            <Route path="/" element={<Navigation/>}/>
            <Route path="/main" element={<Home/>}/>
            {/*<Route path="/modal" element={<ModalTest/>}/>*/}
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>

            <Route path="/" element={<Test/>}/>
            <Route path="/member" element={<Member/>}>
              <Route path=":memberId" element={<MemberInfo/>}/>
            </Route>
            {/* <Route path="*" element={<Navigate replace to="/login"/>}/> */}
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
