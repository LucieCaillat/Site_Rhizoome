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
#root{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} 
`;
export const Title1 = styled.h1`
  margin: 0 0 20px;
  font-size: ${fontSize.title1};
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
    text-align: left;
  }
  & span {
    font-size: ${fontSize.smallBodyText};
    @media screen and (max-width: ${screenSizeM}) {
      font-size: ${fontSize.smallBodyTextM};
    }
    @media screen and (max-width: ${screenSizeS}) {
      font-size: ${fontSize.smallBodyTextS};
    }
  }
`;

export const BodyList = styled.ul`
  margin: 0;
  color: ${({ color }) => (color ? color : colors.offWhite)};
  font-size: ${fontSize.bodyText};
  text-align: justify;
  @media screen and (max-width: ${screenSizeM}) {
    font-size: ${fontSize.bodyTextM};
  }
  @media screen and (max-width: ${screenSizeS}) {
    font-size: ${fontSize.bodyTextS};
    text-align: left;
  }
`;

export const SmallBodyText = styled.div`
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

export const Citation = styled.p`
  margin: 0;
  font-size: ${fontSize.bodyText};
  text-align: center;
  font-style: italic;
  @media screen and (max-width: ${screenSizeM}) {
    font-size: ${fontSize.bodyTextM};
  }
  @media screen and (max-width: ${screenSizeS}) {
    font-size: ${fontSize.bodyTextS};
  }
`;

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 30vh;
  object-fit: cover;
`;

export default GlobalStyle;
