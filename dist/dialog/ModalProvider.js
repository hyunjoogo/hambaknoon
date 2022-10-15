import React, { useState } from "react";
import styled from "styled-components";
const ModalContext = React.createContext(null);
const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContents, setModalContents] = useState(React.createElement(React.Fragment, null));
    const openModal = (dialog) => {
        const child = React.cloneElement(dialog, {
            onClose: (result) => {
                if (dialog.props.onClose) {
                    dialog.props.onClose(result);
                    closeModal();
                }
            }
        });
        setIsModalOpen(true);
        setModalContents(child);
    };
    const closeModal = () => {
        const openModal = document.querySelector(".openModal");
        openModal === null || openModal === void 0 ? void 0 : openModal.classList.add("closeModal");
        setTimeout(() => setIsModalOpen(false), 300);
    };
    const cancelModal = (event) => {
        if (event.currentTarget !== event.target)
            return;
        closeModal();
    };
    return (React.createElement(ModalContext.Provider, { value: {
            isModalOpen,
            openModal,
            closeModal
        } },
        children,
        isModalOpen && (React.createElement(Dialog, { className: isModalOpen ? "openModal modal" : "modal", onClick: cancelModal },
            React.createElement("section", null,
                React.createElement("main", null, modalContents))))));
};
export default ModalProvider;
export { ModalContext, ModalProvider };
const Dialog = styled.div `
  display: none;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  //transform: scale(0);
  background-color: rgba(0, 0, 0, 0.6);

  section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
  }

  main {
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }

  &.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }

  &.closeModal {
    animation: modal-bg-close 0.3s;

    section {
      transform: scale(0);
      animation: modal-close linear 0.3s;
    }
  }

  @keyframes modal-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }

  @keyframes modal-close {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0);
    }
  }
  @keyframes modal-bg-close {
    from {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.6);
    }
    to {
      opacity: 0;

    }
  }
`;
