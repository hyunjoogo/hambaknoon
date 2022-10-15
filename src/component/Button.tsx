import React, {ReactNode} from 'react';
import styled from "styled-components";

type Button = {}

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
  width: 100%;
  height: 3.25rem;
  border-radius: 0.5rem;
  color: var(--button-font-color);
  background-color: var(--button-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;

  :disabled {
    background-color: var(--button-disabled-bg-color);
  }
  
  
`;
