import styled from "styled-components";
import colors from "../../utils/style/colors";

export const PetContainer = styled.div`
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "left" ? "row" : "row-reverse"};
  justify-content: ${({ orientation }) =>
    orientation === "left" ? "start" : "end"};
  align-items: flex-start;
  gap: 2%;
  width: 100%;
  background-color: ${colors.offWhite};
  padding: 60px 3%;
  & img {
    margin-top: 7px;
    width: 500px;
    object-fit: cover;
  }
  & h3 {
    color: ${colors.darkBrown};
    text-align: ${({ orientation }) =>
      orientation === "left" ? "left" : "right"};
    margin-bottom: 30px;
  }
  & .pets-text {
    width: ${({ textsize }) => (textsize === "" ? "40%" : textsize)};
  }

  @media screen and (max-width: 1100px) {
    & img {
      width: 300px;
      height: 210px;
    }
    & h3 {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    & h3 {
      text-align: center;
    }
    & .pets-img {
      width: 100%;
    }
    & img {
      width: 100%;
      height: auto;
    }
    & .pets-text {
      width: 100%;
      align-self: center;
      text-align: center;
      & p {
        margin: 10px 2%;
        text-align: center;
      }
    }
  }
`;
