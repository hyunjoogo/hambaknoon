import React from 'react';
import styled from "styled-components";
const Input = ({ className, onChange, value, disabled, placeHolder, isCorrect, name, type, minLength, maxLength }) => {
    return (React.createElement(InputStyled, { minLength: minLength, maxLength: maxLength, type: type, className: className, onChange: onChange, value: value, disabled: disabled, placeholder: placeHolder, isCorrect: isCorrect, name: name }));
};
export default Input;
const InputStyled = styled.input `
  height: 3rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 18px;


  border: 1px solid ${({ isCorrect }) => {
    if (isCorrect === null || isCorrect === undefined) {
        return 'var(--input-border-basic-color)';
    }
    else if (!isCorrect) {
        console.log(isCorrect);
        return 'var(--input-error-color)';
    }
    else {
        return 'var(--input-border-basic-color)';
    }
}};

  
  ::placeholder {
    color: var(--input-placeHolder-color);
    font-weight: bold;
  }

  :focus-visible {
    outline-color: ${({ isCorrect }) => {
    if (isCorrect === null || isCorrect === undefined) {
        return 'var(--input-border-basic-color)';
    }
    else if (!isCorrect) {
        return 'var(--input-error-color)';
    }
    else {
        return 'var(--input-border-basic-color)';
    }
}}
`;
