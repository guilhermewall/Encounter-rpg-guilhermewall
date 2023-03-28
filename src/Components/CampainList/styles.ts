import styled from "styled-components";
import DashboardBackground from "../../Assets/dashboardbackground.png";

export const DashboardMainContent = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${DashboardBackground});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  overflow-x: auto;

  .container {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }

  .card__list {
    display: flex;
    justify-content: flex-start;

    gap: 15px;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 22px;

    @media (min-width: 760px) {
      flex-wrap: wrap;
      overflow-x: auto;
      justify-content: center;
    }
  }
  /* padding: 15px; */
`;

export const DivDashboard = styled.div`
  width: 100%;
`;
export const BannerContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  div {
    padding: 22px 0;
    width: 94%;
    margin: 0 auto;
  }

  h3 {
    font-family: var(--font-tittle);
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #0f0f0f;

    @media (min-width: 760px) {
      font-size: 40px;
      text-align: flex-start;
    }

    /* margin: 10px 0 30px 0; */
  }
  img {
    width: 100vw;
    object-fit: cover;
    height: 300px;

    @media (min-width: 760px) {
      width: 94%;
      margin: 0 auto;
      border-radius: 8px;
    }
  }
`;

export const FilterAndIcon = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  background: var(--color-white);
  border-radius: 8px;
  border-style: none;
  /* padding: 0 15px 0 15px; */
  /* padding-right: 15px; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  & input {
    height: 50px;
    width: 100%;
    border-radius: 8px;
    border-style: none;
    background: transparent;
    font-size: 20px;
    padding: 10px 15px;
    border: 2px solid transparent;
  }

  input::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #868e96;
  }

  input:focus {
    border: 2px solid var(--color-primary);
  }
`;
export const MagnifyingGlassButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border-style: none;
`;
export const FilterContainer = styled.div`
  width: 94%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  gap: 15px;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;
export const NewCampaignButton = styled.button`
  width: 200px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 8px;
  font-size: 16px;
  color: #ffffff;
  border: 1px solid transparent;

  &:hover {
    background: #3c1c08;
  }
`;
export const FormNewCamp = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 15px;

    font-family: var(--font-tittle);
    font-weight: 700;
    font-size: 45px;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    color: #0f0f0f;

    margin-bottom: 10px;
  }

  .closed {
    position: absolute;
    right: 100px;
    top: 50px;

    background-color: transparent;
    border: none;

    font-size: 30px;
  }

  div {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .div__colum {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: space-between;

    input {
      width: 100%;
    }
  }

  label {
    font-family: var(--font-tittle);
    font-size: 24px;

    display: flex;
    align-items: center;

    color: #000000;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-top: 20px;
  }

  input {
    margin-top: 10px;
    height: 45px;
    /* min-width: 250px; */

    padding: 12px;
    background: #fff;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
  }

  input::placeholder {
    font-size: 18px;
    align-items: center;
  }

  select {
    margin-top: 10px;
    height: 45px;
    padding: 10px;

    background: #fff;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
  }

  textarea {
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    margin-top: 10px;
    height: 95px;
    padding: 10px;
  }

  textarea::placeholder {
    font-size: 18px;
    align-items: center;
  }

  .align__center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn__cadastrar {
    position: absolute;
    bottom: 25px;

    width: 50%;
    max-width: 250px;

    background: var(--color-primary);
    border-radius: 8px;
    color: var(--color-white);
    font-size: 32px;

    text-align: center;

    color: #ffffff;

    padding: 4px 20px;

    border: none;
  }
`;
