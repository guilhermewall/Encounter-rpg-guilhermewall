import styled from "styled-components";
import Img from "../../Assets/Img2.png";

export const TextContainerLogin = styled.div`
  max-width: 300px;
  border-radius: 5px;
  font-size: 22px;
  color: var(--color-white);
  text-align: justify;
  display: none;
  color: #ffffff;

  span {
    color: var(--color-secundary);
    display: contents;
  }

  @media (min-width: 760px) {
    max-width: 400px;
    display: flex;
    font-size: 26px;
  }

  @media (min-width: 1400px) {
    max-width: 500px;
    display: flex;
    font-size: 36px;
    max-width: 400px;
  }
`;
export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-black-80);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  padding: 0% 10%;
  gap: 20px;

  & > p {
    max-width: 300px;
    border-radius: 5px;

    font-size: 16px;
    color: #ffffff;
    text-align: justify;
    color: #ffffff;

    span {
      color: var(--color-secundary);
      display: contents;
      font-size: 18px;
    }
  }
  @media (min-width: 760px) {
    flex-direction: row;

    & > p,
    p > span {
      display: none;
    }
  }

  @media (min-width: 1023px) {
    justify-content: space-between;
  }
`;

export const LoginPage = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${Img});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media screen and (max-width: 1023px) {
    background-size: 1023px 100%;
  }
`;
export const DivPasswordContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #cccfcc;
  /* border: 2px solid transparent; */
  border-radius: 8px;
  button {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    /* padding-right: 15px; */
    background: none;
    border: none;
    color: black;
  }
  & input {
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    background: transparent;
    padding: 10px 36px 10px 10px;
  }
`;
