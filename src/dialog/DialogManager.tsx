// https://mingule.tistory.com/78
import React, {ReactNode, useState} from "react";


const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContents, setModalContents] = useState(<></>);

  const openModal = (children: ReactNode) => {
    setIsModalOpen(true);
    // setModalContents(children);
  };

  const closeModal = () => setIsModalOpen(false)

  const onDimmerClick = (event: MouseEvent) => {
    if (event.currentTarget !== event.target) return;

    closeModal();
  };

  return (
    <>
      </>
    // <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
    //   {children}
    //
    //   {isModalOpen && (
    //     <div onClick={onDimmerClick}>
    //       {modalContents}
    //     </div>
    //   )}
    // </ModalContext.Provider>
  );
};
