import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

interface ShareModal {
  onClose?: (result: any) => void;
}

const ShareModal: React.FunctionComponent<ShareModal> = ({ onClose }) => {
  const [userUrl] = useState("dambyurak/erewwe");
  const [isCopy, setIsCopy] = useState(false);

  const copyUrl = () => {
    //TODO 복사하기 기능
    navigator.clipboard.writeText(userUrl)
      .then(() => {setIsCopy(true)
      })
      .catch(error => console.log(error.message));
    console.log(onClose, isCopy);
  };

  return (
    <ShareWrapper>
      <h1 className="title">편지를 쓸 수 있도록 담벼락을 공유해보세요.</h1>
      <URLWrapper>
        <p className="url">내 주소</p>
        <div className="url-bg">
          <p>{userUrl}</p>
        </div>
      </URLWrapper>

      <Copy>
        <p className="copy">
          복사가 되었습니다.</p>
      </Copy>


      <Button onClick={copyUrl}>복사</Button>
    </ShareWrapper>
  );
};

export default ShareModal;

const ShareWrapper = styled.section`
  min-height: 50vh;
  padding-top: 2.5rem;

  .title {
    font-size: var(--main-title-font-size);
    font-weight: bold;
    text-align: left;
    margin-bottom: 1.5rem;
    line-height: 2.25rem;
  }
`;

const URLWrapper = styled.div`
  .url {
    font-size: 0.75rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.25rem;
  }

  .url-bg {
    height: 3.5rem;
    background-color: var(--main-color-whitesmoke);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
  }
`;

const Copy = styled.div`
  height: 3.5rem;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;

  //@keyframes fadeout {
  //  from {
  //    opacity: 0;
  //  }
  //  to {
  //    opacity: 1;
  //  }
  //}
  //
  //.fadeOut {
  //  animation: fadeout 2s;
  //}
`;
