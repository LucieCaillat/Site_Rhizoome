import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";

export const PublicsContainer = styled.div`
  padding-bottom: 50px;
  min-height: 82vh;
  background-color: ${colors.offWhite};
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
    background-color: ${colors.purple};
    & i {
      color: ${colors.purple};
    }
  }

  &.autre-structure {
    background-color: ${colors.blue};
    & i {
      color: ${colors.blue};
    }
  }
  &.particulier {
    background-color: ${colors.yellow};
    & i {
      color: ${colors.yellow};
      filter: brightness(0.85);
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  min-width: 350px;
  margin: 50px 1%;
  padding: 20px;
  text-align: center;
  & h2 {
    color: ${colors.offWhite};
    line-height: ${fontSize.title2};
    margin-bottom: 20px;
  }
  & p {
    color: ${colors.offWhite};
    margin-top: 20px;
    text-align: center;
  }

  & i {
    filter: brightness(0.8);
    font-size: 100px;
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
  }
`;
