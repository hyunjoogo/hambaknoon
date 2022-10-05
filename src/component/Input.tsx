import React, {ChangeEventHandler} from 'react';
import styled from "styled-components";

interface InputProps {
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string | string[] | number
  disabled?: boolean
}

const Input: React.FC<InputProps> = (
  {
    className,
    onChange,
    value,
    disabled,
  }) => {
  return (
    <InputStyled
      type="text"
      className={className}
      onChange={onChange}
      value={value}
      disabled={disabled}


    />
  );
};

export default Input;

const InputStyled = styled.input`
`;
