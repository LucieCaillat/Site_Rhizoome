import styled from "styled-components";
import colors from "../../utils/style/colors";

export const QuiSommeNousContainer = styled.div`
  background-color: ${colors.cream};
  & h1 {
    position: relative;
    top: -30vh;
    height: 20px;
    color: ${colors.offWhite};
    margin-left: 20px;
  }
  & .pets-title {
    text-align: center;
    margin: 80px 0;
  }
`;
