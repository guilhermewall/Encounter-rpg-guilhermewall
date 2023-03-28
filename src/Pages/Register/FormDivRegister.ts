import styled from "styled-components";

export const FormDivRegister = styled.div`
  width: 100%;
  max-width: 350px;
  /* height: 80%; */
  background: rgba(79, 79, 79, 0.8);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px 15px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 5px; */
    /* align-items: center; */
  }

  & > h2 {
    /* width: 42%; */
    /* margin: 0 auto;
    padding: 20px 0px; */
    font-family: var(--font-tittle);
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  label {
    width: 100%;
    max-width: 250px;
    margin-top: 12px;
    margin-bottom: 10px;
    font-family: var(--font-tittle);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: #000;
  }
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: var(--color-secundary);
    text-decoration: none;
  }
  a:hover {
    color: #868e96;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    /* margin: 10px auto 0 auto; */
    /* width: 50%; */
    color: #ffffff;
    margin-top: 15px;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    /* width: 70%; */
    /* margin: 0 auto; */
    color: red;
    height: 5px;
    margin-top: 4px;
  }
`;
