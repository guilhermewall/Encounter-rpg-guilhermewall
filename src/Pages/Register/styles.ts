import styled from "styled-components";
import Img from "../../Assets/Img2.png";

export const TextContainerRegister = styled.div`
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
    max-width: 300px;
    display: flex;
    font-size: 26px;
  }

  @media (min-width: 1400px) {
    max-width: 500px;
    display: flex;
    font-size: 36px;
    max-width: 400px;
  }

  @media screen and (min-width: 760px) {
    display: flex;
  }
`;

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000080;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: space-around;
  padding: 0% 10%;
  gap: 20px;
  @media screen and (max-width: 1023px) {
    justify-content: center;
  }
`;

export const RegisterPage = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${Img});
  background-size: 100% 100%;
  /* background-size: contain; */
  background-repeat: no-repeat;

  @media screen and (max-width: 1023px) {
    background-size: 1023px 100%;
  }
`;
export const DivPasswordContainerRegister = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #cccfcc;

  border-radius: 8px;
  /* padding: 5px 10px; */

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
`;
export const PasswordInput = styled.input`
  width: 100%;
  border: 2px solid transparent;
  background: transparent;
  padding: 10px 10px;
  border-radius: 8px;

  &:focus {
    border: 2px solid var(--color-primary);
  }
`;
export const RegisterInput = styled.input`
  /* margin: 0 auto; */
  padding: 10px 10px;
  border-radius: 6px;
  width: 100%;
  max-width: 250px;
  background: #cccfcc;
  border: 2px solid transparent;
  border-radius: 8px;
  input::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #868e96;
  }

  &:focus {
    border: 2px solid var(--color-primary);
  }
`;
