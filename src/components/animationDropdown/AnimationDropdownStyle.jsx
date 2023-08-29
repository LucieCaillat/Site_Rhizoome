import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";

export const AnimationDropdownContainer = styled.section`
  width: 80%;
  margin: auto;
  font-weight: bold;
  margin-bottom: 20px;
`;
// HAT
export const Hat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 4px 1%;
  padding-bottom: ${({ isOpen }) => (isOpen ? "24px" : "0")};
  background-color: ${({ color, isOpen }) => (isOpen ? color : "#F7EFE0")};
  color: ${({ isOpen }) => (isOpen ? colors.police.cream : colors.police.nav)};
  font-size: ${fontSize.title2};
  line-height: 41px;
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
// BODY
export const Body = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  margin: 0;
`;
// DESCRIPTION
export const Description = styled.div`
  display: flex;
  justify-content: ${({ isLeftSide }) =>
    isLeftSide ? "flex-start" : "flex-end"};

  min-height: 13vw;
  background-color: ${({ color }) => (color ? color : "")};
  & p {
    width: 60%;
    margin: 0;
    padding: 20px;
    color: ${colors.police.cream};
    font-size: ${fontSize.bodyText};
    text-align: justify;
  }
`;
// LOWERPART IMG + GOALS + TAG BOX
export const LowerPart = styled.div`
  height: 250px;
  display: flex;
  flex-direction: ${({ isLeftSide }) => (isLeftSide ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: end;
  & img {
    width: 40%;
    height: 460px;
    object-fit: cover;
  }
  & .objectif-side {
    width: 60%;
    padding: 20px;
    padding-bottom: 0;
  }
`;
// GOALS
export const Goals = styled.div`
  width: 100%;
  height: 200px;
  margin: 0px;
  padding: 10px 0px;
  color: ${colors.background.footer};
  font-size: 25px;
  & ul {
    margin: 0;
    list-style: "-  ";
  }
`;
// TAG BOX
export const TagBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: end;
  gap: 5px;
  height: 50px;
`;
