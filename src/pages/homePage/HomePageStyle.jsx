import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomePageTitle = styled.h1`
  position: absolute;
  top: 15vh;
  left: 5%;
  height: 0px;
  margin: 0px;
  color: ${colors.offWhite};
  font-size: ${fontSize.title};
  padding: 0;
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
