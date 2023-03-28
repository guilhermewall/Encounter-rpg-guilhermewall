import styled, { keyframes } from "styled-components";
import pergaminho from "../../Assets/pergaminho.png";

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(3px);

    width: 100%;
    height: 100vh;

    background: rgba(0, 0, 0, 0.75);
  }
`;

const openScroll = keyframes`
  0%{
     
      height: 0;
    }

    100% {
      height: 100%;
    }
  
`;

export const Scroll = styled.div`
  background-image: url(${pergaminho});
  background-size: 100% 100%;

  position: absolute;

  width: 100%;
  max-width: 450px;
  height: 90%;
  max-height: 800px;

  background-repeat: no-repeat;

  padding: 110px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: 0.5s;
  animation: ${openScroll} 0.8s linear;

  .container {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .container::-webkit-scrollbar {
    width: 0.5px;
    background: rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 450px) {
    padding: 100px 0px;
  }
`;
