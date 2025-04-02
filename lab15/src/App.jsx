import React from "react";
import ProfileCards from "./components/Card/Card.jsx";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
      padding: 0;
      margin: 0;
      background-color: #ede0d4;
      overflow-y: hidden;
  },

  * {
    box-sizing: border-box;
}
`;

const Title = styled.h1`
    font-size: 40px;
    font-family: "Gill Sans Extrabold", sans-serif;
    text-align: center;
    background: inherit;
    height: 20px;
    margin-top: 20px;
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Title>Select your specialist:</Title>
      <ProfileCards />
    </div>
  );
}

export default App;
