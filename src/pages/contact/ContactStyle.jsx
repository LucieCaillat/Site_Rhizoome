import styled from "styled-components";
import colors from "../../utils/style/colors";

export const ContactContainer = styled.div`
  padding: 0 5%;
  min-height: 85vh;
  background-color: ${colors.offWhite};
  & p {
    color: ${colors.darkGray};
  }
  & .contact-subtitle {
    text-align: center;
  }
  & .contact-body {
    margin: 50px auto;
    width: 70%;
    & p {
      margin-bottom: 50px;
      transform: scale(1.2);
      transform-origin: left;
      color: ${colors.green};
      transition: all 500ms;
      &:hover {
        filter: brightness(0.8);
      }
    }
    & h2 {
      margin-bottom: 20px;
    }
  }
`;
