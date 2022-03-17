import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TestPage from "./pages/TestPage";
import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="test" element={<TestPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
