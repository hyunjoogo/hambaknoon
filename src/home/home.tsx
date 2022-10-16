import React from "react";
import { Layout } from "../styles/commonStyle";
import styled from "styled-components";
import Button from "../component/Button";

const Home = () => {
  return (
    <HomeLayout>
      <Top>
        [유저네임]님
        12월엔 눈이 올까요?
        ❄️ 눈이 오면 열려요
      </Top>
      <Bottom>
        <TwoButtonWrapper>
          <Button className="toMe">나에게 쓰기</Button>
          <Button className="share">공유하기</Button>
        </TwoButtonWrapper>
      </Bottom>
    </HomeLayout>
  );
};

export default Home;

const HomeLayout = styled(Layout)`

`;

const Top = styled.div`
  padding: 0 1.5rem;
  height: 50vh;
`;

const Bottom = styled.div`
  padding: 0 1.5rem;
  height: 50vh;
  background-color: var(--main-color-lightgray);
`

const TwoButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 0.5rem;

  .toMe {
    color: var(--button-secondary-font-color);
    background-color: var(--button-secondary-bg-color);
  }
`;
