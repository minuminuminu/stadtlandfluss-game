import styled from "styled-components";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";

// const socket = io("http://localhost:3001");

const TestPage = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    socket.on("changeContent", (arg) => {
      // let dummyArr = [...content];
      // dummyArr.push(arg);
      setContent(arg);
    });
  }, [socket]);

  const doChange = () => {
    socket.emit("change", content);
  };

  return (
    <>
      {content.map((e, i) => {
        return <div key={i}>{e}</div>;
      })}
      <button onClick={() => doChange()}>TEST</button>
    </>
  );
};

export default TestPage;
