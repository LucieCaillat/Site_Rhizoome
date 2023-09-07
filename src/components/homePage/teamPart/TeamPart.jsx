import { TeamPartContainer, BodyText } from "./TeamPartStyle";
import { Title2 } from "../../../globalStyle";
import RoundImageLink from "../roundImageLink/RoundImageLink";
import imgFlorine from "../../../assets/florine.jpg";
import imgChiens from "../../../assets/les_chiens.jpg";
import imgChevres from "../../../assets/les_chevres.jpg";
import imgPoules from "../../../assets/les_poules.jpg";
import imgLapins from "../../../assets/les_lapins.jpg";
import imgCochonDInde from "../../../assets/les_cochons_d_inde.jpg";

const petRoundImageSize = "250";

export default function TeamPart({ children, title }) {
  return (
    <TeamPartContainer>
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
      <div className="pets">
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
    </TeamPartContainer>
  );
}