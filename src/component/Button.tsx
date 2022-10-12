import React, {ReactNode} from 'react';
import styled from "styled-components";

type Button = {

}

interface ButtonProps {
  children: ReactNode,
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
  type?: 'button' | 'submit' | 'reset',
}

const Button: React.FC<ButtonProps> = (
  {
    children,
    className,
    disabled,
    onClick,
    type,
  }) => {
  return (
    <>
      <ButtonStyled
        type={type}
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </ButtonStyled>
    </>
  );
};

export default Button;

const ButtonStyled = styled.button`
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
