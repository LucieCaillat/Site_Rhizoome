import styled from "styled-components";

export const QuestionsBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
  margin: 50px 0 80px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
