import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Test from "./component/Test";
import Navigation from "./component/Navigation";
import Member from "./member/Member";
import MemberInfo from "./member/MemberInfo";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/main" element={<Test/>}/>
          <Route path="/login" element={<Test/>}/>
          <Route path="/" element={<Test/>}/>
          <Route path="/member" element={<Member/>}>
            <Route path=":memberId" element={<MemberInfo/>}/>
          </Route>
          <Route path="*" element={<Navigate replace to="/login"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
