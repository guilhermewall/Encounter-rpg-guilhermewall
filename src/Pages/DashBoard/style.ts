import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;
