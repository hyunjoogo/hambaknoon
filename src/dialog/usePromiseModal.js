import { useContext, useRef } from "react";
import { ModalContext } from "./ModalProvider";
export const usePromiseModal = () => {
    const modal = useContext(ModalContext);
    const resolveRef = useRef(() => {
    });
    const showModal = (content) => {
        return new Promise((resolve) => {
            resolveRef.current = resolve;
            modal === null || modal === void 0 ? void 0 : modal.openModal(content);
        });
    };
    const hideModal = () => {
        resolveRef.current(false);
        modal === null || modal === void 0 ? void 0 : modal.closeModal();
    };
    return { showModal, hideModal };
};
