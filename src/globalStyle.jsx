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
}
`;
export const BodyText = styled.p`
  margin: 0;
  color: ${colors.police.cream};
  font-size: ${fontSize.bodyText};
  text-align: justify;
  @media screen and (max-width: ${screenSizeM}) {
    font-size: ${fontSize.bodyTextM};
  }
  @media screen and (max-width: ${screenSizeS}) {
    font-size: ${fontSize.bodyTextS};
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

export default GlobalStyle;
