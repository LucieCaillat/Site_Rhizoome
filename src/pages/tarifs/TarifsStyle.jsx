import styled from "styled-components";
import colors from "../../utils/style/colors";

export const TarifsContainer = styled.div`
  background-color: ${colors.cream};
  padding: 30px 0 0;
  & h1 {
    margin: 0 3%;
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
    background-color: ${colors.darkGreen};
  }
  &.tarifs_autour_chien {
    background-color: ${colors.orange};
  }
  &.tarifs_médiation_a {
    background-color: ${colors.purple};
  }
  &.tarifs_particuliers {
    background-color: ${colors.blue};
  }
  width: 48%;
  min-width: 700px;
  color: ${colors.offWhite};
  padding: 20px 30px;
  margin: 40px 0;
  & h2 {
    text-align: center;
  }
  & p {
    margin: 20px 0;
    text-align: left;
  }
  & .frais {
    color: white;
    text-align: center;
    margin: 40px 0;
    transform: scale(1.2);
  }
  & div {
    font-weight: normal;
  }
  @media screen and (max-width: 1535px) {
    width: 90%;
    min-width: 350px;
  }
`;