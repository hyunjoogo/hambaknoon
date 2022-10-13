// https://mingule.tistory.com/78
import React, {ReactNode, useState} from "react";
import {useRecoilState} from "recoil";
import {modalState} from "../recoil";
import styled from "styled-components";


const ModalProvider = ({children}: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  const [modalContents, setModalContents] = useState(<></>);
  console.log(setModalContents)

  const closeModal = () => setIsModalOpen(false)

  const onDimmerClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.currentTarget !== event.target) return;
    closeModal();
  };

  console.log(children, modalContents, onDimmerClick)

  return (
    <Dialog className={isModalOpen ? 'openModal modal' : 'modal'} onClick={onDimmerClick}>
      {
        isModalOpen
          ? <section>
            <main>
              {children}
            </main>
          </section>
          : null
      }
    </Dialog>

  );
};

export default ModalProvider;

const Dialog = styled.div`
  display: none;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
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

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
