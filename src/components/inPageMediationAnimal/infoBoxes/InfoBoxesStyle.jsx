import styled from "styled-components";

export const InfoBoxesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 20px 5% 50px;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;
