import React from "react";
import { ButtonWrapper } from "../styles/commonStyle";
import Button from "./Button";
import styled from "styled-components";
const AlertModal = ({ content, onClose }) => {
    return (React.createElement(AlertWrapper, null,
        React.createElement(AlertContent, null, content),
        React.createElement(ButtonWrapper, null,
            React.createElement(Button, { type: "button", onClick: () => onClose ? onClose("닫기") : null }, "\uD655\uC778"))));
};
export default AlertModal;
const AlertWrapper = styled.div `
  display: flex;
  flex-direction: column;
`;
const AlertContent = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15vh;
`;
