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
        if (props.onClose)
            props.onClose('닫아!');
    };
    return (React.createElement("button", { onClick: closeModal }, "\uD504\uB86D\uC2A4\uB97C \uBCF4\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4."));
};
