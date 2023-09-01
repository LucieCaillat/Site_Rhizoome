import styled from "styled-components";
import colors from "../../utils/style/colors";

export const PetContainer = styled.div`
  display: flex;
  flex-direction: ${({ isLeftSide }) => (isLeftSide ? "row" : "row-reverse")};
  justify-content: space-between;
  align-items: center;
  width: 95%;
  background-color: ${colors.offWhite};
  margin: 20px auto;
  & img {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
  & .pets-text {
    margin: 20px;
  }
`;
