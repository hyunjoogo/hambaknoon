import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../styles/commonStyle";
const Navigation = () => {
    return (React.createElement(Nav, null,
        React.createElement(Link, { to: "/main" }, "\uB098\uC758 \uB2F4\uBCBC\uB77D"),
        React.createElement(Link, { to: "/login" }, "\uB85C\uADF8\uC778"),
        React.createElement(Link, { to: "/signup" }, "\uD68C\uC6D0\uAC00\uC785")));
};
export default Navigation;
const Nav = styled(Layout) `
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  font-size : var(--anchor-font-size);
`;
