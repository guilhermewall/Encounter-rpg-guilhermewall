import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 15px;
    font-family: var(--font-tittle);
    font-weight: 700;
    font-size: 24px;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    color: #0f0f0f;
    margin-bottom: 10px;
  }

  h3 {
    margin-top: 15px;
    font-family: var(--font-tittle);
    font-weight: 700;
    font-size: 18px;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    color: #0f0f0f;
  }

  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;

    div {
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      justify-items: center;
      gap: 5px;
    }

    span {
      text-align: end;

      font-style: normal;
      font-weight: 400;
      font-size: 14px;
    }
  }

  .img__div {
    position: relative;

    width: 100%;

    img {
      opacity: 0.6;

      width: 100%;
      height: 220px;

      object-fit: cover;
    }

    div {
      position: absolute;
      top: 0px;
      left: 10px;

      span {
        height: 30px;

        font-size: 14px;

        padding: 8px;

        border-radius: 8px;
        color: var(--color-white);

        text-align: center;
      }

      .red {
        background-color: red;
      }

      .green {
        background-color: green;
      }
    }
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    margin-top: 15px;
  }

  .players {
    display: flex;
    justify-content: space-between;
  }

  ul {
    margin-top: 15px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 100px;

    li {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
    }
  }

  .btn__cadastrar {
    /* position: absolute; */
    bottom: 25px;

    /* top: 770px; */

    /* margin-top: 15px; */
    width: 50%;
    max-width: 250px;

    background: var(--color-primary);
    border-radius: 8px;
    color: var(--color-white);

    font-size: 16px;

    text-align: center;

    color: #ffffff;

    padding: 4px 20px;

    margin-top: 10px;
    border: 1px solid transparent;
  }

  .btn__deletar {
    max-width: 250px;

    background: #ff00009c;
    border-radius: 8px;
    color: var(--color-white);

    font-size: 16px;

    text-align: center;
    padding: 4px 20px;

    border: 1px solid transparent;
  }

  .closed {
    position: absolute;
    top: 20px;
    right: 40px;
    background-color: transparent;
    border: none;
    font-size: 30px;
    @media (min-width: 1440px) {
      top: 35px;
      right: 50px;
    }
  }
`;
