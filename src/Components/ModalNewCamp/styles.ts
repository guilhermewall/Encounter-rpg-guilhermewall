import styled from "styled-components";
export const FormNewCamp = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  h2 {
    margin-top: 15px;
    font-family: var(--font-tittle);
    font-weight: 700;
    font-size: 30px;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    color: #0f0f0f;
    margin-bottom: 10px;
  }
  .closed {
    position: absolute;
    top: 20px;
    right: 40px;
    background-color: transparent;
    border: none;
    font-size: 30px;

    svg {
      transition: 0.5s;
      color: #0f0f0f;
    }

    svg:hover {
      color: #fff;
    }
    @media (min-width: 1440px) {
      top: 35px;
      right: 50px;
    }
  }
  div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 450px) {
      flex-direction: row;
      align-items: end;
    }
  }
  .div__colum {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    input {
      width: 100%;
      /* min-width: 220px; */
    }
  }
  label {
    font-family: var(--font-tittle);
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
  }
  input {
    margin-top: 10px;
    height: 45px;
    width: 100%;
    min-width: 200px;
    padding: 12px;
    background: #fff;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    font-size: 16px;
  }

  input:focus {
    border: 2px solid var(--color-primary);
  }
  input::placeholder {
    font-size: 16px;
    align-items: center;
  }
  select {
    margin-top: 10px;
    height: 45px;
    max-width: 70px;
    padding: 12px;
    background: #fff;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
  }

  select:focus {
    border: 2px solid var(--color-primary);
  }

  textarea {
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    height: 95px;
    padding: 10px;
    margin-top: 10px;
  }

  textarea:focus {
    border: 2px solid var(--color-primary);
  }

  textarea::placeholder {
    font-size: 14px;
    align-items: center;
  }
  .align__center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn__cadastrar {
    /* position: absolute; */
    bottom: 25px;
    max-width: 250px;
    background: var(--color-primary);
    border-radius: 8px;
    color: var(--color-white);

    font-size: 20px;
    text-align: center;
    color: #ffffff;
    padding: 6px 20px;
    margin-top: 10px;
    border: 1px solid transparent;
  }

  .btn__cadastrar:hover {
    background: #3c1c08;
  }

  span {
    font-size: 16px;
    height: 5px;
    color: red;
    margin-top: 5px;
    margin-bottom: 10px;
    align-self: center;
  }
`;
