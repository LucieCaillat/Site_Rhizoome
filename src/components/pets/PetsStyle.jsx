import styled from "styled-components";
import colors from "../../utils/style/colors";

export const PetContainer = styled.div`
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "left" ? "row" : "row-reverse"};
  justify-content: space-between;
  align-items: center;
  gap: 4%;
  width: 100%;
  background-color: ${colors.offWhite};
  padding: 30px 5%;
  & img {
    width: 400px;
    object-fit: cover;
    border-radius: 250px;
  }
  & h3 {
    color: ${colors.darkBrown};
  }
  & .pets-text {
    align-self: flex-start;
  }

  @media screen and (max-width: 1300px) {
    padding: 30px 2%;
    gap: 2%;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
    & .pets-img {
      width: 70%;
      max-width: 300px;
    }
    & img {
      width: 100%;
      height: auto;
    }
    & .pets-text {
      align-self: center;
      text-align: center;
      & p {
        margin: 10px 2%;
        text-align: center;
      }
    }
  }
`;
