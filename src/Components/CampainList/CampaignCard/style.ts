import styled from "styled-components";
import CardBackground from "../../../Assets/cardfundo.png";
import MasterImg from "../../../Assets/profileimg.png";
export const CardDiv = styled.div`
  /* overflow-x: auto; */
  margin-top: 15px;
  display: flex;
  gap: 2%;

  /* flex-wrap: nowrap;
  flex-direction: column; */
`;
export const CardContainer = styled.li`
  width: 250px;
  height: 340px;
  background-image: url(${CardBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 10px;
  padding: 15px 30px;
  margin-bottom: 15px;
  /* flex-shrink: 0; */

  .masterInfo {
    padding: 10px 0px;
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      width: 35px;
      height: 35px;
    }
    h4 {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
    }
  }
  .statusContainer {
    display: flex;
    flex-direction: column;
    span {
      text-align: center;
      margin-top: 30px;
      font-size: 18px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  button {
    width: 100%;
    margin-top: 14px;
    height: 27px;
    background: var(--color-secundary);
    border-radius: 5px;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;

    border: none;
  }
`;
export const CampaignTitleAndImg = styled.div`
  .div__tittle {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  h3 {
    width: 85%;
    margin: 0 auto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
  }
  .img__div {
    position: relative;

    width: 100%;
    height: 140px;

    img {
      margin-left: 2px;
      opacity: 0.6;
      width: 100%;
      height: 120px;
      object-fit: cover;
    }

    .redAndGreen {
      margin-top: 5px;
      display: flex;
      /* height: 100%; */

      /* margin-left: 5px; */
      /* display: inline-block; */
    }
    div {
      top: 0px;
      left: 10px;

      span {
        font-size: 16px;
        border-radius: 4px;
        color: var(--color-white);
        text-align: center;
        text-overflow: 20px;
      }

      .red {
        padding: 2px 4px;
        margin-right: 10px;
        font-size: 12px;
        background-color: red;
      }

      .green {
        padding: 2px 6px;
        font-size: 12px;
        background-color: green;
      }
    }
  }
`;
