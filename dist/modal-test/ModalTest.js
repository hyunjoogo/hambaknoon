import React from 'react';
import { useRecoilState } from "recoil";
import { modalState } from "../recoil";
import ModalProvider from "../dialog/DialogManager";
import SignUp from "../signup/SignUp";
const ModalTest = () => {
    const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
    const openModal = () => {
        console.log(isModalOpen);
        setIsModalOpen(true);
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: openModal }, "\uBAA8\uB2EC \uC624\uD508"),
        isModalOpen && React.createElement(ModalProvider, null,
            React.createElement(SignUp, null))));
};
export default ModalTest;
