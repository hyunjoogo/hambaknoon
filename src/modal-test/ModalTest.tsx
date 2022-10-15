import React from 'react';
import {usePromiseModal} from "../dialog/usePromiseModal";
import SignUp from "../signup/SignUp";

const ModalTest = () => {
  const {showModal} = usePromiseModal();
  const openModal = () => {
    showModal(<SignUp/>)
  }

  return (
    <div>
      <button onClick={openModal}>모달 오픈</button>
    </div>
  );
};

export default ModalTest;
