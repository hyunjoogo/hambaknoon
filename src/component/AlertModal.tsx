import React from "react";
import { ButtonWrapper } from "../styles/commonStyle";
import Button from "./Button";
import styled from "styled-components";

interface AlertProps {
  content: React.ReactNode | string;
  onClose?: (result: any) => void;
}

const AlertModal: React.FunctionComponent<AlertProps> = ({
  content,
  onClose
}) => {
  return (
    <AlertWrapper>
      <AlertContent>
        {content}
      </AlertContent>
      <ButtonWrapper>
        <Button type="button" onClick={() => onClose ? onClose("닫기") : null}>확인</Button>
      </ButtonWrapper>
    </AlertWrapper>
  );
};

export default AlertModal;

const AlertWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AlertContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15vh;
`;
