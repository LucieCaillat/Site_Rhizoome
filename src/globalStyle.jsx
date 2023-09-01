import styled, { createGlobalStyle } from "styled-components";
import colors from "./utils/style/colors";
import fontSize from "./utils/style/fontSize";

const screenSizeM = "1100px";
const screenSizeS = "900px";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Faune", sans-serif;
  font-weight: bold;
  color: ${colors.darkGray};
}
`;

export const Title1 = styled.h1`
  margin: 0 0 20px;
  font-size: ${fontSize.title1};
  color: ${({ color }) => (color ? color : "")};
  @media screen and (max-width: ${screenSizeM}) {
    font-size: ${fontSize.title1M};
  }
  @media screen and (max-width: ${screenSizeS}) {
    text-align: center;
    font-size: ${fontSize.title1S};
    line-height: ${fontSize.title2};
  }
`;
export const Title2 = styled.h2`
  margin: 0;
  font-size: ${fontSize.title2};
  color: ${({ color }) => (color ? color : colors.darkGray)};
  @media screen and (max-width: ${screenSizeM}) {
    font-size: ${fontSize.title2M};
  }
  @media screen and (max-width: ${screenSizeS}) {
    font-size: ${fontSize.title2S};
  }
`;

export const Title3 = styled.h3`
  margin: 0;
  font-size: ${fontSize.title3};
  @media screen and (max-width: ${screenSizeM}) {
    font-size: ${fontSize.title3M};
  }
  @media screen and (max-width: ${screenSizeS}) {
    font-size: ${fontSize.title3S};
  }
`;

export const BodyText = styled.p`
  margin: 0;
  color: ${({ color }) => (color ? color : colors.offWhite)};
  font-size: ${fontSize.bodyText};
  text-align: justify;
  @media screen and (max-width: ${screenSizeM}) {
    font-size: ${fontSize.bodyTextM};
  }
  @media screen and (max-width: ${screenSizeS}) {
    font-size: ${fontSize.bodyTextS};
  }
`;

export const SmallBodyText = styled.p`
  margin: 0;
  color: ${({ color }) => (color ? color : colors.offWhite)};
  font-size: ${fontSize.smallBodyText};
  @media screen and (max-width: ${screenSizeM}) {
    font-size: ${fontSize.smallBodyTextM};
  }
  @media screen and (max-width: ${screenSizeS}) {
    font-size: ${fontSize.smallBodyTextS};
  }
`;

export default GlobalStyle;
