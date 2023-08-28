import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";

export const AnimationDropdownContainer = styled.section`
  width: 80%;
  margin: auto;
`;

export const Hat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  background-color: ${({ color, isOpen }) => (isOpen ? color : "#F7EFE0")};
  color: ${({ isOpen }) => (isOpen ? colors.police.cream : colors.police.nav)};
  font-size: ${fontSize.title2};
  & h3 {
    margin: 0;
  }
  & .fa-chevron-up {
    display: ${({ isOpen }) => (isOpen ? "none" : "line")};
  }
  & .fa-chevron-down {
    display: ${({ isOpen }) => (isOpen ? "line" : "none")};
  }
`;

export const Body = styled.div`
  margin: 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  font-size: ${fontSize.bodyText};
`;

export const Description = styled.div`
  background-color: ${({ color }) => (color ? color : "")};
  padding: 20px;
  display: flex;
  justify-content: ${({ isLeftSide }) =>
    isLeftSide ? "flex-start" : "flex-end"};
  min-height: 100px;
  & p {
    width: 60%;
    text-align: justify;
    margin: 0;
    color: ${colors.police.cream};
  }
`;

export const LowerPart = styled.div`
  position: relative;
  top: -5vw;
  display: flex;
  flex-direction: ${({ isLeftSide }) => (isLeftSide ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: end;
  & img {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
  & .objectif-side {
    width: 60%;
    background-color: red;
  }
`;

export const Goals = styled.div`
  width: 100%;
  margin: 5px 0;
  background-color: yellow;
  & ul {
    width: 100%;
    margin: 0;
    & li {
      width: 100%;
    }
  }
`;

export const TagBox = styled.div`
  height: 50px;
  background-color: blue;
`;
