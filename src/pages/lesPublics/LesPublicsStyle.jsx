import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";

export const PublicsContainer = styled.div`
  position: relative;
  z-index: -2;
  padding-bottom: 50px;
  min-height: (85vh - 50px);
  & h1 {
    margin: 20px 5%;
    @media screen and (max-width: 380px) {
      margin: 20px auto;
    }
  }
`;

export const TypesOfPublicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px auto;
  width: 100%;
  max-width: 2400px;
`;

export const TypeOfPublics = styled.section`
  &.ecole {
    & .publics-icon {
      background-color: ${colors.purple};
      color: ${colors.purple};
    }
  }
  &.autre-structure {
    & .publics-icon {
      background-color: ${colors.blue};
      color: ${colors.blue};
    }
  }
  &.particulier {
    & .publics-icon {
      background-color: ${colors.yellow};
      color: ${colors.yellow};
      & i {
        filter: brightness(0.85);
      }
    }
  }

  position: relative;
  width: 30%;
  min-width: 350px;
  min-height: 350px;
  margin: 50px 1%;
  padding: 20px;
  text-align: center;
  & h2 {
    color: ${colors.offWhite};
    line-height: ${fontSize.title2};
  }
  & p {
    color: ${colors.offWhite};
    margin-top: 90px;
    text-align: center;
  }

  & .publics-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    z-index: -1;
    & i {
      filter: brightness(0.8);
    }
  }
  @media screen and (max-width: 1131px) {
    width: 46%;
    margin: 20px 0;
  }
  @media screen and (max-width: 744px) {
    width: 90%;
  }
  @media screen and (max-width: 450px) {
    min-width: auto;
    & .publics-icon {
      font-size: 200px;
    }
  }
`;
