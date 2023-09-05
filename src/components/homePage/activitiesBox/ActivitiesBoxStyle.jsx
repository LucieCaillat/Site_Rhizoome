import styled from "styled-components";
import colors from "../../../utils/style/colors";
import fontSize from "../../../utils/style/fontSize";
import fleur from "../../../assets/filigrane_fleur.png";
import pate from "../../../assets/filigrane_pate.png";
import feuille from "../../../assets/filigrane_feuille.png";

export const ActivitiesBoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background-color: white;
  margin-bottom: 30px;
  & #animation-nature {
    background-image: url(${fleur});
    background-repeat: no-repeat;
    background-position-y: 20%;
  }
  & #autour-du-chien {
    background-image: url(${pate});
    background-repeat: no-repeat;
    background-position-x: 90%;
  }
  & #médiation-animal {
    background-image: url(${feuille});
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-position-y: 20%;
  }
  @media screen and (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
  }
`;

export const ActivityBox = styled.div`
  position: relative;
  top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-width: 300px;
  max-width: 500px;
  & p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 230px;
    padding-bottom: 40px;
    text-align: center;
    font-weight: bold;
    color: ${colors.darkGray};
    font-size: ${fontSize.activityBox};
    margin: 0;
    background-color: ${colors.cream};
    & span {
      font-size: 27px;
    }
  }
  & button {
    position: relative;
    top: -25px;
  }
  @media screen and (max-width: 990px) {
    width: 70%;
    & p {
      height: 300px;
    }
  }
`;
