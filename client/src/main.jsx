import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TestPage from "./pages/TestPage";
import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import styled from "styled-components";

const FullBody = styled.div`
  width: 100vw;
  height: 100vh;
`;

ReactDOM.render(
  <FullBody>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="test" element={<TestPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </FullBody>,
  document.getElementById("root")
);
