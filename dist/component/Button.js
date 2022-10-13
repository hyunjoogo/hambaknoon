import React from 'react';
import styled from "styled-components";
const Button = ({ children, className, disabled, onClick, type, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(ButtonStyled, { type: type, className: className, disabled: disabled, onClick: onClick }, children)));
};
export default Button;
const ButtonStyled = styled.button `
  height: 53px;
  width: 320px;
  left: 20px;
  top: 206px;
  border-radius: 0.5rem;
  color: var(--button-font-color);
  background-color: var(--button-bg-color);
  padding: 15px 24px 15px 24px;
  
  :disabled {
    background-color: #D9D9D9;

  }
`;
