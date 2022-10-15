import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  // 내가 custom으로 만들고 싶은 건 여기에
  isCorrect?: boolean | null; // null일때는 초기값
}

const Input = (
  {
    className,
    onChange,
    value,
    disabled,
    placeholder,
    isCorrect,
    name,
    type,
    minLength,
    maxLength
  }: InputProps) => {
  return (
    <InputStyled
      minLength={minLength}
      maxLength={maxLength}
      type={type}
      className={className}
      onChange={onChange}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      isCorrect={isCorrect}
      name={name}
    />
  );
};

export default Input;

const InputStyled = styled.input<InputProps>`
  height: 3rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 18px;


  border: 1px solid ${({isCorrect}) => {
    if (isCorrect === null || isCorrect === undefined) {
      return 'var(--input-border-basic-color)'
    } else if (!isCorrect) {
      console.log(isCorrect)
      return 'var(--input-error-color)'
    } else {
      return 'var(--input-border-basic-color)'
    }
  }};

  
  ::placeholder {
    color: var(--input-placeholder-color);
    font-weight: bold;
  }

  :focus-visible {
    outline-color: ${({isCorrect}) => {
      if (isCorrect === null || isCorrect === undefined) {
        return 'var(--input-border-basic-color)'
      } else if (!isCorrect) {
        return 'var(--input-error-color)'
      } else {
        return 'var(--input-border-basic-color)'
      }
    }
  }
`;
