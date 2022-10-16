import styled from "styled-components";
export const Layout = styled.section `
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;
export const ButtonWrapper = styled.div `
  margin-top: 1rem;
`;
export const LabelInput = styled.div `
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  label {

  }
`;
export const TitleBox = styled.section `
  height: 30%;
  display: flex;
  padding-top: 20%;

  .title {
    font-size: var(--main-title-font-size);
    font-weight: bold;
    text-align: center;
  }

  .subTitle {
    font-size: var(--main-subTitle-font-size);
    margin-bottom: 1rem;
    text-align: center;
  }
`;
