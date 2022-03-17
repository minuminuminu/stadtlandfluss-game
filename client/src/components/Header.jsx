import styled, { keyframes } from "styled-components";

const TitleTransition = keyframes`
  from{
    opacity: 0;
    transform: rotateY(-10deg);
  }

  to{
    opacity: 1;
    transform:rotateY(0)
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 3.3em;
  text-transform: uppercase;
  animation: ${TitleTransition} 0.8s;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Stadt Land Fluss</Title>
    </HeaderContainer>
  );
};
