import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HomePageTitleContainer = styled.div`
  position: relative;
`;

export const HomePageTitle = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  color: ${colors.offWhite};
  font-size: ${fontSize.title};
  margin: 2% 4%;
  & span {
    display: block;
    color: ${colors.green};
    font-size: ${fontSize.subtitle};
  }
  @media screen and (max-width: 880px) {
    font-size: ${fontSize.titleM};
    & span {
      font-size: ${fontSize.subtitleM};
    }
  }
  @media screen and (max-width: 450px) {
    font-size: ${fontSize.titleS};
    & span {
      font-size: ${fontSize.subtitleS};
    }
  }
`;

export const HomePageIntroduction = styled.div`
  background-color: ${colors.lightBrown};
  color: ${colors.offWhite};
  padding: 50px 5% 80px;
  & p {
    margin: 30px 0;
  }
`;
