import styled, { css } from "styled-components";

interface iStyledContainerProps {
  IsVisible: boolean;
}

export const Container = styled.div<iStyledContainerProps>`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: #1f100da6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  overflow-y: hidden;

  transition: 0.5s;
  /* border-radius: 5px;
  overflow-y: auto;
  padding: 15px;
  margin: 10px 0; */

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: white;
    transform: rotate(45deg);
    transition: 0.7s;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-secundary);
    border-radius: 5px;
    padding: 15px;
    width: 80%;
    transform: scale(0.7);
    transition: 0.7s;

    h3 {
      font-family: var(--font-tittle);
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      color: var(--color-white);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      text-align: center;
      margin-bottom: 10px;
    }

    ul {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }
    
    li {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      button {
        background: var(--color-primary);
        border-radius: 8px;
        color: var(--color-white);
        font-size: 16px;

        text-align: center;

        color: #ffffff;

        padding: 4px 10px;

        border: none;
      }
    }

    @media (min-width: 760px) {
    }
  }

  ${({ IsVisible }) =>
    IsVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      div {
        transform: scale(1);
      }
    `}
`;
