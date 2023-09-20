import styled from "styled-components";
import colors from "../../utils/style/colors";

export const TarifsContainer = styled.div`
  background: linear-gradient(${colors.offWhite}, ${colors.cream});
  padding: 20px 0 0;
  & h1 {
    margin: 0 5%;
    color: ${colors.darkGray};
  }
  & .tarif_contactez_moi {
    color: ${colors.orange};
    text-align: center;
    margin: 50px;
  }
`;

export const TarifsBoxesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 3%;
  @media screen and (max-width: 1535px) {
    justify-content: center;
  }
`;

export const TarifsBox = styled.section`
  &.tarifs_anim_nat {
    background-color: ${colors.whiteGreen};
    & h2 {
      background-color: ${colors.green};
    }
  }
  &.tarifs_autour_chien {
    background-color: ${colors.whiteBrown};
    & h2 {
      background-color: ${colors.brown};
    }
  }
  &.tarifs_médiation_a {
    background-color: ${colors.whiteOrange};
    & h2 {
      background-color: ${colors.orange};
    }
  }
  &.tarifs_particuliers {
    background-color: ${colors.whiteYellow};
    & h2 {
      background-color: ${colors.yellow};
    }
  }
  width: 48%;
  min-width: 700px;
  padding-bottom: 20px;
  margin: 40px 0;
  & h2 {
    text-align: center;
    padding: 10px 0 20px;
    color: ${colors.offWhite};
    margin-bottom: 50px;
  }
  & p,
  div {
    text-align: center;
    color: ${colors.darkGray};
  }
  & p {
    margin: 20px 0;
  }
  & .frais {
    margin: 50px 10px 20px;
    transform: scale(0.9);
    font-weight: normal;
  }
  & div {
    font-weight: normal;
    margin: 0 4%;
  }
  @media screen and (max-width: 1535px) {
    max-width: 860px;
    width: 96%;
    min-width: auto;
  }
`;
