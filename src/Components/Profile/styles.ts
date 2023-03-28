import styled from "styled-components";

export const ProfileMenu = styled.section`
  background: rgb(60, 28, 8);
  background: radial-gradient(
    circle,
    rgba(60, 28, 8, 0.8839907192575406) 0%,
    rgba(30, 16, 13, 1) 100%
  );
  /* height: 150px; */
  padding: 15px 15px 0 15px;

  .btn__logout {
    min-width: 125px;
    align-self: center;
    height: 35px;
    border: none;
    background: var(--color-secundary);
    border-radius: 5px;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;

    &:hover {
      background: #a7824cb0;
    }
  }

  .show {
    display: none;
  }

  @media (min-width: 760px) {
    width: 25%;
    max-width: 300px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 15px;

    .none {
      display: none;
    }

    .show {
      display: block;
    }
  }
`;
export const ProfileContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .title__app {
    color: #ffffff;
    font-size: 20px;
    text-align: center;
  }

  @media (min-width: 760px) {
    gap: 40px;

    .title__app {
      color: #ffffff;
      font-size: 28px;
      text-align: center;
    }
  }

  .div__spacebetween {
    justify-content: space-between;

    @media (min-width: 760px) {
      justify-content: center;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }

  .title {
    /* margin-top: 20px; */
    font-family: var(--font-tittle);
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;

    @media (min-width: 1100px) {
      font-size: 34px;
    }
  }

  .menu {
    background-color: transparent;
    border: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    @media (min-width: 760px) {
      flex-direction: column;
    }
  }
  .avatar__user {
    width: 12%;
    max-width: 45px;
    max-height: 45px;

    @media (min-width: 760px) {
      width: 80px;
      height: 80px;
      max-width: 80px;
      max-height: 80px;
    }
  }
  .nickname__user {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;

    @media (min-width: 1100px) {
      font-size: 22px;
    }
  }
`;
export const ProfileCampaignContainer = styled.div`
  display: none;

  .title {
    display: none;
  }

  .title2 {
    display: none;
  }

  .view {
    display: none;

    background: var(--color-primary);
    border-radius: 8px;
    color: var(--color-white);
    font-size: 16px;

    text-align: center;

    color: #ffffff;

    padding: 4px 10px;

    border: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  @media (min-width: 768px) {
    .div__profile {
      display: flex;
      border-radius: 5px;
      overflow-y: auto;
      background: var(--color-secundary);
      padding: 15px;
      margin: 10px 0;
    }

    .title {
      display: contents;
      font-family: var(--font-tittle);
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      color: #ffffff;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      text-align: center;
      margin-bottom: 10px;
    }

    .title2 {
      display: contents;
      font-family: var(--font-tittle);
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: #ffffff;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      text-align: center;
      margin-bottom: 10px;
    }

    .div__lists {
      display: flex;
      flex-direction: column;
    }
    .ul__profile {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 8px;
    }
    .camp__li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
