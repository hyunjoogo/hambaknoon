import React from "react";
import { Layout, TitleBox } from "../styles/commonStyle";
import styled from "styled-components";
import Button from "../component/Button";
import { usePromiseModal } from "../dialog/usePromiseModal";
import ShareModal from "../component/ShareModal";

const Home = () => {
  const { showModal } = usePromiseModal();

  const showShareModal = () => {
    showModal(<ShareModal
      onClose={() => {
        console.log('hello');
      }}
    />);
  };

  return (
    <HomeLayout>
      <HomeTitleBox>
        <h1 className="title">
          [유저네임]님, <br/>
          12월엔 눈이 올까요?
        </h1>
        <h2 className="subTitle">
          ❄️ 눈이 오면 열려요
        </h2>
      </HomeTitleBox>
      <Bottom>
        <TwoButtonWrapper>
          <Button className="toMe">나에게 쓰기</Button>
          <Button className="share" onClick={showShareModal}>공유하기</Button>
        </TwoButtonWrapper>
      </Bottom>
    </HomeLayout>
  );
};

export default Home;

const HomeLayout = styled(Layout)`

`;

const HomeTitleBox = styled(TitleBox)`
  padding: 20% 1.5rem;
  height: 50%;
  flex-direction: column;

  .title {
    line-height: 2rem;
    text-align: left;
    margin-bottom: 1rem;
  }

  .subTitle {
    font-weight: 700;
    text-align: left;
  }
`;

const Bottom = styled.div`
  padding: 0 1.5rem;
  height: 50%;
  background-color: var(--main-color-lightgray);
  display: flex;
  align-items: flex-end;
`;

const TwoButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 0.5rem;
  margin-bottom: 2.5rem;

  .toMe {
    color: var(--button-secondary-font-color);
    background-color: var(--button-secondary-bg-color);
  }
`;
