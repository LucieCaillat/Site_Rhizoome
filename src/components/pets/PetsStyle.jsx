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
    height: 400px;
    object-fit: cover;
    border-radius: 250px;
  }
  & h3 {
    color: ${colors.darkBrown};
  }
  & .pets-text {
    align-self: flex-start;
  }
`;
