import React from 'react';
import { usePromiseModal } from "../dialog/usePromiseModal";
import SignUp from "../signup/SignUp";
const ModalTest = () => {
    const { showModal } = usePromiseModal();
    const openModal = () => {
        showModal(React.createElement(SignUp, null));
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: openModal }, "\uBAA8\uB2EC \uC624\uD508")));
};
export default ModalTest;
