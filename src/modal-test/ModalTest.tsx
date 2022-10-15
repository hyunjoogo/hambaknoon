import React from "react";
import { usePromiseModal } from "../dialog/usePromiseModal";

const ModalTest = () => {
  const { showModal } = usePromiseModal();
  const openModal = () => {
    showModal(<PropsTest
      text="text"
      onClose={(result) => {
        console.log(result);
      }}
    />);
  };

  return (
    <div>
      <button onClick={openModal}>모달 오픈</button>
    </div>
  );
};

export default ModalTest;

interface Props {
  text: string;
  onClose?: (result?: string | null) => void;
}

const PropsTest: React.FunctionComponent<Props> = (props) => {
  const closeModal = () => {
    if (props.onClose) {
      props.onClose("닫아!");
    }
  };

  return (
    <>
      {props.text}
      <button onClick={closeModal}>
        close버튼
      </button>
    </>
  );
};
