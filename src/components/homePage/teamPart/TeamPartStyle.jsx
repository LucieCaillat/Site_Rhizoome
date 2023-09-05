import styled from "styled-components";
import colors from "../../../utils/style/colors";
import fontSize from "../../../utils/style/fontSize";

export const TeamPartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${colors.green};
  color: ${colors.cream};

  & .body {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 30px;
    & .text {
      width: 60%;
    }
    @media screen and (max-width: 880px) {
      flex-direction: column-reverse;
      & .text {
        width: 100%;
        padding: 5%;
        text-align: center;
      }
    }
  }
  & .pets {
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 2000px;
    height: 100px;
    @media screen and (max-width: 1450px) {
      width: 99%;
    }
    @media screen and (max-width: 880px) {
      flex-direction: column;
      align-items: center;
      gap: 30px;
      height: auto;
      width: 100%;
      background: linear-gradient(${colors.green}, ${colors.offWhite});
    }
  }
`;

export const BodyText = styled.p`
  font-size: ${fontSize.bodyText};
`;
