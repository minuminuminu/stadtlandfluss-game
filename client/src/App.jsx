import { useForm } from "react-hook-form";
import { Header } from "./components/Header";
import { UI } from "./components/UI";
import { io } from "socket.io-client";

function App() {
  const { register, handleSubmit } = useForm();

  const socket = io("http://localhost:3001");

  socket.on("data", (data) => console.log(data));
  socket.on("joinedRoom", (args) => console.log(args));

  return (
    <>
      <Header />
      <UI register={register} handleSubmit={handleSubmit} socket={socket} />
    </>
  );
}

export default App;
