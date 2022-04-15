import { useForm } from "react-hook-form";
import { Header } from "./components/Header";
import { UI } from "./components/UI";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Header />
      <UI register={register} handleSubmit={handleSubmit} socket={socket} />
    </>
  );
}

export default App;
