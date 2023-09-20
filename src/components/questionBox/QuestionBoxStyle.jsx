import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";

export const QuestionBoxContainer = styled.aside`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.offWhite};
  width: 45%;
  max-width: 700px;
  cursor: pointer;
  & .question {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    display: ${({ open }) => (open === "yes" ? "none" : "flex")};
    justify-content: center;
    align-items: center;
    font-size: ${fontSize.bodyText};
    color: ${colors.green};
    text-align: center;
    background-color: ${colors.offWhite};
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform 1000ms;
    transition-delay: 300ms;
  }
  & .answer {
    font-size: ${fontSize.smallBodyTextM};
    padding: 5%;
    color: ${colors.darkBrown};
  }
  &:hover .question {
    transform: scaleY(0);
    transition: transform 600ms;
  }
`;
