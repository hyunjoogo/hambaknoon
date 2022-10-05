import React from 'react';
import {createGlobalStyle} from 'styled-components';

import AppRouter from "./AppRouter";

function App() {
  return <>
    <GlobalStyle/>
    <AppRouter/>
  </>;
}

export default App;

export const GlobalStyle = createGlobalStyle`
  // 글로벌 세팅 할 곳

  button {
    border: none;
  }
`;
