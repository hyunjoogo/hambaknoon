import React from 'react';
import {useRecoilState} from "recoil";
import {modalState} from "../recoil";
import ModalProvider from "../dialog/DialogManager";
import SignUp from "../signup/SignUp";

const ModalTest = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);

  const openModal = () => {
    console.log(isModalOpen)
    setIsModalOpen(true)
  }

  return (
    <div>
      <button onClick={openModal}>모달 오픈</button>
      {isModalOpen && <ModalProvider>
        <SignUp/>
      </ModalProvider>}
    </div>
  );
};

export default ModalTest;
