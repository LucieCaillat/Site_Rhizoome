import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Title2, BodyText } from "../../pages/HomePage";
import RoundImageLink from "./RoundImageLink";
import imgFlorine from "../../assets/florine.jpg";
import imgChiens from "../../assets/les_chiens.jpg";
import imgChevres from "../../assets/les_chevres.jpg";
import imgPoules from "../../assets/les_poules.jpg";
import imgLapins from "../../assets/les_lapins.jpg";
import imgCochonDInde from "../../assets/les_cochons_d_inde.jpg";

const petRoundImageSize = "250";

const Div = styled.div`
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
  & .pet {
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

export default function TeamPart({ children, title }) {
  return (
    <Div>
      <div className="body">
        <RoundImageLink
          size="500"
          img={imgFlorine}
          url="/QuiSommeNous"
          title="MON PARCOURS"
        />
        <div className="text">
          <Title2>{title}</Title2>
          <BodyText>{children}</BodyText>
        </div>
      </div>
      <div className="pet">
        <RoundImageLink
          size={petRoundImageSize}
          img={imgChiens}
          url="/QuiSommeNous#les-chiens"
          title="LES CHIENS"
        />
        <RoundImageLink
          size={petRoundImageSize}
          img={imgChevres}
          url="/QuiSommeNous#les-chèvres"
          title="LES CHÉVRES"
        />
        <RoundImageLink
          size={petRoundImageSize}
          img={imgPoules}
          url="/QuiSommeNous#les-poules"
          title="LES POULES"
        />
        <RoundImageLink
          size={petRoundImageSize}
          img={imgLapins}
          url="/QuiSommeNous#les-lapins"
          title="LES LAPINS"
        />
        <RoundImageLink
          size={petRoundImageSize}
          img={imgCochonDInde}
          url="/QuiSommeNous#les-cochon-d-inde"
          title="LES COCHONS D'INDE"
        />
      </div>
    </Div>
  );
}
