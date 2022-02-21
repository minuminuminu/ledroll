import { useState } from "react";
import { keyframes, css } from "styled-components";
import styled from "styled-components";

const ledrollAni = keyframes`
  0%{opacity:0}
  60% {opacity:0.1}
  85%{opacity:0}
`;

const fadeInAnimation = keyframes`
  0%{opacity:0;}
  100%{
    opacity:1
  }
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${fadeInAnimation} ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const Img = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("images/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -1;
  opacity: 0;
  animation: ${(props) =>
    props.show
      ? css`
          ${ledrollAni} 0.5s
        `
      : "none"};
`;

const H1 = styled.h1`
  margin-bottom: 45vh;
  font-size: 4em;
  font-weight: 300;
`;

const Buttons = styled.div`
  margin-top: 15vh;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #69da69;
  border: none;
  width: 150px;
  height: 80px;
  margin: 10px;
  font-size: 1em;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #62c062;
  }
`;

const No = styled(Button)`
  background-color: #ff0000;
  transform: ${(props) =>
    `translateX(${props.positionX}vw) translateY(${props.positionY}vh)`};

  &:hover {
    background-color: #e62020;
  }
`;

function App() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [ledroll, setLedroll] = useState(false);
  const sound = new Audio("audio/sound.mp3");

  const randomize = () => {
    setPosX(Math.floor(Math.random() * 1 * 40));
    setPosY(Math.floor(Math.random() * 81) - 40);
  };

  return (
    <Body>
      <Img show={ledroll} />
      <H1>Are you dumb?</H1>
      <Buttons>
        <Button
          onClick={() => {
            setLedroll(true);
            setTimeout(() => setLedroll(false), 500);
          }}
        >
          Yes
        </Button>
        <No
          positionX={posX}
          positionY={posY}
          onClick={() => {
            randomize();
            sound.play();
          }}
        >
          No
        </No>
      </Buttons>
    </Body>
  );
}

export default App;
