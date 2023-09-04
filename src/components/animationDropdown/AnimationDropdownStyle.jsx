import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";

const textWidth = [60, 70, 100];
const imgHeight = [460, 380];
const lowerPartHeight = [250, 270];
const screenSize = ["1600px", "900px"];

export const AnimationDropdownContainer = styled.section`
  width: 90%;
  max-width: 1600px;
  margin: auto;
  margin-bottom: ${({ open }) => (open === "yes" ? "80px" : "20px")};
`;
// HAT
export const Hat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 4px 1%;
  padding-bottom: ${({ open }) => (open === "yes" ? "24px" : "0")};
  background-color: ${({ color, open }) =>
    open === "yes" ? color : colors.translucentGray};
  color: ${({ open }) => (open === "yes" ? colors.offWhite : colors.darkGray)};
  font-size: ${fontSize.title2};
  line-height: 41px;
  cursor: pointer;
  @media screen and (max-width: 1300px) {
    font-size: ${fontSize.title3M};
    line-height: auto;
  }
  @media screen and (max-width: 900px) {
    font-size: ${fontSize.title3S};
  }
  & h3 {
    margin: 0;
  }
  & .fa-chevron-up {
    display: ${({ open }) => (open === "yes" ? "none" : "line")};
  }
  & .fa-chevron-down {
    display: ${({ open }) => (open === "yes" ? "line" : "none")};
  }
`;
// BODY
export const Body = styled.div`
  display: ${({ open }) => (open === "yes" ? "block" : "none")};
  margin: 0;
`;
// DESCRIPTION
export const Description = styled.div`
  display: flex;
  justify-content: ${({ orientation }) =>
    orientation === "left" ? "flex-start" : "flex-end"};
  min-height: ${imgHeight[0] - lowerPartHeight[0] + 25 + "px"};
  background-color: ${({ color }) => (color ? color : "")};
  & p {
    width: ${textWidth[0] + "%"};
    padding: 20px;
  }
  @media screen and (max-width: ${screenSize[0]}) {
    min-height: ${imgHeight[1] - lowerPartHeight[1] + 25 + "px"};
    & p {
      width: ${textWidth[1] + "%"};
    }
  }
  @media screen and (max-width: ${screenSize[1]}) {
    min-height: auto;
    & p {
      width: ${textWidth[2] + "%"};
    }
  }
`;
// LOWERPART IMG + GOALS + TAG BOX
export const LowerPart = styled.div`
  height: ${lowerPartHeight[0] + "px"};
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "left" ? "row-reverse" : "row"};
  justify-content: space-between;
  align-items: end;
  & img {
    width: ${100 - textWidth[0] + "%"};
    height: ${imgHeight[0] + "px"};
    object-fit: cover;
  }
  & .objectif-side {
    width: ${textWidth[0] + "%"};
    padding: 20px;
    padding-bottom: 0;
  }
  @media screen and (max-width: ${screenSize[0]}) {
    height: ${lowerPartHeight[1] + "px"};
    & img {
      width: ${100 - textWidth[1] + "%"};
      height: ${imgHeight[1] + "px"};
    }
    & .objectif-side {
      width: ${textWidth[1] + "%"};
    }
  }
  @media screen and (max-width: ${screenSize[1]}) {
    height: auto;
    & img {
      display: none;
    }
    & .objectif-side {
      width: ${textWidth[2] + "%"};
      padding-top: 0;
    }
  }
`;
// GOALS
export const Goals = styled.div`
  width: 100%;
  height: ${lowerPartHeight[0] - 50 + "px"};
  margin: 0px;
  padding: 10px 0px;
  color: ${colors.darkBrown};
  font-size: ${fontSize.smallBodyText};
  & ul {
    margin: 0;
    list-style: "-  ";
  }
  @media screen and (max-width: ${screenSize[0]}) {
    height: ${lowerPartHeight[1] - 50 + "px"};
  }
  @media screen and (max-width: ${screenSize[1]}) {
    height: auto;
  }
  @media screen and (max-width: 1300px) {
    font-size: ${fontSize.smallBodyTextM};
  }
  @media screen and (max-width: 900px) {
    font-size: ${fontSize.smallBodyTextS};
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
