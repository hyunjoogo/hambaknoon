import React from "react";
import { Layout, TitleBox } from "../styles/commonStyle";
import styled from "styled-components";
import Button from "../component/Button";
const Home = () => {
    return (React.createElement(HomeLayout, null,
        React.createElement(HomeTitleBox, null,
            React.createElement("h1", { className: "title" },
                "[\uC720\uC800\uB124\uC784]\uB2D8, ",
                React.createElement("br", null),
                "12\uC6D4\uC5D4 \uB208\uC774 \uC62C\uAE4C\uC694?"),
            React.createElement("h2", { className: "subTitle" }, "\u2744\uFE0F \uB208\uC774 \uC624\uBA74 \uC5F4\uB824\uC694")),
        React.createElement(Bottom, null,
            React.createElement(TwoButtonWrapper, null,
                React.createElement(Button, { className: "toMe" }, "\uB098\uC5D0\uAC8C \uC4F0\uAE30"),
                React.createElement(Button, { className: "share" }, "\uACF5\uC720\uD558\uAE30")))));
};
export default Home;
const HomeLayout = styled(Layout) `

`;
const HomeTitleBox = styled(TitleBox) `
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
const Bottom = styled.div `
  padding: 0 1.5rem;
  height: 50%;
  background-color: var(--main-color-lightgray);
  display: flex;
  align-items: flex-end;
`;
const TwoButtonWrapper = styled.div `
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
