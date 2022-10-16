import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../styles/commonStyle";

const Navigation = () => {
  return (
    <Nav>
      <Link to={"/main"}>나의 담벼락</Link>
      <Link to={"/login"}>로그인</Link>
      <Link to={"/signup"}>회원가입</Link>
    </Nav>
  );
};

export default Navigation;

const Nav = styled(Layout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  font-size : var(--anchor-font-size);
`;
