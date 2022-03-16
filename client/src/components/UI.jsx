import styled, { keyframes } from "styled-components";

const UITransition = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-5%);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

const UIContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${UITransition} 1.1s ease-in-out;
`;

const Form = styled.form`
  width: 70%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 30vw;
  height: 30px;
  padding: 1.25em 1.8em;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 0.6em;
  box-shadow: 0px 0px 10px -4px;
  transition: transform 0.2s ease-in-out;

  &:focus {
    outline: none;
    transform: scale(1.03);
  }
`;

const Submit = styled.button`
  background-color: #ffffffb9;
  width: 10vw;
  height: 30px;
  margin-top: 2em;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px -4px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #f3f1f1b9;
  }

  &:active {
    background-color: #cec7c7b9;
  }
`;

export const UI = ({ register, handleSubmit, socket }) => {
  const leSubmit = (data, e) => {
    socket.emit("data", data);
    e.target.reset();
  };

  return (
    <UIContainer onSubmit={handleSubmit(leSubmit)}>
      <Form autoComplete="off">
        <Input
          type={"text"}
          placeholder={"Username ..."}
          {...register("username", { required: true })}
        />
        <Input
          type={"text"}
          placeholder={"Room Number ..."}
          {...register("roomNumber", { required: true })}
        />
        <Submit>Join Room</Submit>
      </Form>
    </UIContainer>
  );
};
