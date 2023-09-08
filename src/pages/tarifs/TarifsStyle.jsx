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
  &.tarifs_anim_nat h2 {
    color: ${colors.darkGreen};
  }
  &.tarifs_autour_chien h2 {
    color: ${colors.orange};
  }
  &.tarifs_médiation_a h2 {
    color: ${colors.purple};
  }
  &.tarifs_particuliers h2 {
    color: ${colors.blue};
  }
  width: 48%;
  min-width: 700px;
  background-color: ${colors.offWhite};

  padding: 20px 30px;
  margin: 40px 0;
  & h2 {
    text-align: center;
  }
  & p {
    margin: 20px 0;
    text-align: left;
    color: ${colors.darkGray};
  }
  & .frais {
    color: ${colors.darkGray};
    filter: brightness(0.7);
    text-align: center;
    margin: 40px 0;
    transform: scale(1.2);
  }
  & div {
    font-weight: normal;
    color: ${colors.darkGray};
  }
  @media screen and (max-width: 1535px) {
    width: 90%;
    min-width: 350px;
  }
`;
