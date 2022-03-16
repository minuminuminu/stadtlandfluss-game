import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Header } from "./components/Header";
import { UI } from "./components/UI";
import { io } from "socket.io-client";

const FullBody = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const { register, handleSubmit } = useForm();

  const socket = io("http://localhost:3001");

  socket.on("data", (data) => console.log(data));

  return (
    <FullBody>
      <Header />
      <UI register={register} handleSubmit={handleSubmit} socket={socket} />
    </FullBody>
  );
}

export default App;
