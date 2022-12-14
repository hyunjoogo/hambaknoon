import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import AppRouter from "./AppRouter";
import { RecoilRoot } from "recoil";
function App() {
    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, []);
    return (React.createElement(RecoilRoot, null,
        React.createElement(GlobalStyle, null),
        React.createElement(AppRouter, null)));
}
export default App;
export const GlobalStyle = createGlobalStyle `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  :root {
    --vh: 100%; // 사용자의 뷰포트 계산하기
  }

  * {
    box-sizing: border-box;
    word-break: keep-all;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); // 버튼 Touch시 나오는 음영 지우기
    //user-select: none; // 텍스트 셀렉트 안되게
    -webkit-touch-callout: none; // 롱터치 막음
  }

  body {
    line-height: 1;
    //height: calc(var(--vh, 1vh) * 100);
    //height: 100%;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a:visited {
    color: inherit;
  }
`;
