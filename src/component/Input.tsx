import React, {ChangeEventHandler} from 'react';
import styled from "styled-components";

interface InputProps {
  name?:string
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string | string[] | number
  disabled?: boolean
  placeHolder?: string
  isError?: boolean
  type? :string
  minLength? : number
  maxLength? : number
}


const Input: React.FC<InputProps> = (
  {
    className,
    onChange,
    value,
    disabled,
    placeHolder,
    isError,
    name,
    type,
    minLength,
    maxLength
  }) => {
  return (
    <InputStyled
      minLength={minLength}
      maxLength={maxLength}
      type={type}
      className={className}
      onChange={onChange}
      value={value}
      disabled={disabled}
      placeholder={placeHolder}
      isError={isError}
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

  border: 1px solid ${(props) => props.isError
          ? 'var(--input-border-error-color)'
          : 'var(--input-border-basic-color)'
  };

  ::placeholder {
    color: var(--input-placeHolder-color);
    font-weight: bold;
  }

  :focus-visible {
    outline-color: ${(props) => props.isError
            ? 'inherit'
            : 'var(--input-focus-color)'
    };
  }
`;
