import styled from "styled-components";
import colors from "../../utils/style/colors";

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
  position: relative;
  width: 30%;
  min-width: 350px;
  min-height: 350px;
  margin: 50px 1%;
  padding: 20px;
  text-align: center;
  & h2 {
    color: ${colors.offWhite};
  }
  & p {
    color: ${colors.offWhite};
    margin-top: 20px;
    text-align: left;
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
    color: ${colors.translucentWhite};
    font-size: 300px;
    background-color: ${colors.green};
    z-index: -1;
  }
`;
