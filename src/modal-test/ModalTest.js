import React from "react";
import { usePromiseModal } from "../dialog/usePromiseModal";
const ModalTest = () => {
    const { showModal } = usePromiseModal();
    const openModal = () => {
        showModal(React.createElement(PropsTest, { text: "text", onClose: (result) => {
                console.log(result);
            } }));
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: openModal }, "\uBAA8\uB2EC \uC624\uD508")));
};
export default ModalTest;
const PropsTest = (props) => {
    const closeModal = () => {
        if (props.onClose) {
            props.onClose("닫아!");
        }
    };
    return (React.createElement(React.Fragment, null,
        props.text,
        React.createElement("button", { onClick: closeModal }, "close\uBC84\uD2BC")));
};
