import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  // 내가 custom으로 만들고 싶은 건 여기에
}

const Button = (
  {
    children,
    className,
    disabled,
    onClick,
    type,
  }: ButtonProps) => {
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
  font-size: var(--button-font-size);

  :disabled {
    background-color: var(--button-disabled-bg-color);
  }
  
  
`;
