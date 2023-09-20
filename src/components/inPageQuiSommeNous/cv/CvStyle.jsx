import styled from "styled-components";
import colors from "../../../utils/style/colors";
import fontSize from "../../../utils/style/fontSize";

export const CvContainer = styled.aside`
  display: ${({ type }) => (type ? "none" : "block")};
  background-color: ${colors.lightGreen};
  width: 500px;
  padding: 30px;

  & h3 {
    margin: 0;
    color: ${colors.darkBrown};
    text-align: center;
  }

  & li {
    margin: 20px 0;
    color: ${colors.brown};
  }
  @media screen and (max-width: 1500px) {
    width: 400px;
    padding: 15px;
  }
  @media screen and (max-width: 1100px) {
    width: 400px;
    padding: 10px;
    & li {
      margin: 15px 0;
    }
    @media screen and (max-width: 900px) {
      position: relative;
      top: -100px;
      display: block;
      margin: auto;
      width: 94%;
      max-width: 500px;
    }
  }
`;

export const SmallBodyText = styled.div`
  margin: 0;
  color: ${({ color }) => (color ? color : colors.offWhite)};
  font-size: ${fontSize.smallBodyText};
  @media screen and (max-width: 1500px) {
    font-size: ${fontSize.smallBodyTextM};
  }
  @media screen and (max-width: 1100px) {
    font-size: ${fontSize.smallBodyTextS};
  }
`;
