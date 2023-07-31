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

const petRoundImageSize = "250px";

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${colors.background.green};
  color: ${colors.police.cream};

  & .body {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 30px;
    & .text {
      width: 60%;
    }
  }
  & .pet {
    display: flex;
    justify-content: space-around;
    width: 90%;
    height: 100px;
  }
`;

export default function TeamPart({ children, title }) {
  return (
    <Div>
      <div className="body">
        <RoundImageLink
          size="500px"
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
          url="/QuiSommeNous"
          title="LES CHIENS"
        />
        <RoundImageLink
          size={petRoundImageSize}
          img={imgChevres}
          url="/QuiSommeNous"
          title="LES CHÉVRES"
        />
        <RoundImageLink
          size={petRoundImageSize}
          img={imgPoules}
          url="/QuiSommeNous"
          title="LES POULES"
        />
        <RoundImageLink
          size={petRoundImageSize}
          img={imgLapins}
          url="/QuiSommeNous"
          title="LES LAPINS"
        />
        <RoundImageLink
          size={petRoundImageSize}
          img={imgCochonDInde}
          url="/QuiSommeNous"
          title="LES COCHONS D'INDE"
        />
      </div>
    </Div>
  );
}
