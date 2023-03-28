import styled from "styled-components";
import card from "../../Assets/card.png";
import imagemCamp from "../../Assets/imagemCamp.png";

export const CardStyled = styled.li`
  background-image: url(${card});
  background-size: 100% 100%;

  height: 350px;
  width: 225px;

  box-shadow: 8px 4px 9px rgba(0, 0, 0, 0.25);

  padding: 25px 20px 25px 23px;
  border-radius: 8px;

  & > h2 {
    font-size: 50px;
    text-align: center;
    color: #ffffff;
  }

  .img__camp {
    background-image: url(${imagemCamp});
    background-size: 100% 100%;

    position: relative;

    height: 130px;
    width: 100%;

    object-fit: cover;
    padding: 10px;

    span {
      height: 20px;

      font-size: 12px;

      padding: 5px;

      border-radius: 8px;
      color: var(--color-white);

      text-align: center;

      margin-right: 10px;
    }

    .red {
      background-color: red;
    }

    .green {
      background-color: green;
    }
  }

  .div__user {
    width: 100%;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    gap: 10px;
  }

  img {
    margin-top: 5px;
  }

  p {
    font-size: 14px;
    color: #ffffff;
  }
  & > span {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    display: block;
    margin-top: 5px;
    margin-left: 10px;
  }

  button {
    margin: 0 auto;
    margin-top: 15px;
    background: var(--color-secundary);
    border-radius: 5px;
    height: 27px;
    align-self: center;
    padding: 10px 20px;
    text-align: center;
    display: flex;
    align-items: center;

    font-size: 14px;

    color: #ffffff;
  }
`;
