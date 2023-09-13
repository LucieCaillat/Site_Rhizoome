import { AutourDuChienContainer, TitleContainer } from "./AutourDuChienStyle";
import { Title1, Cover, BodyText } from "../../globalStyle";
import Peccram from "./Peccram";
import Lac from "./Lac";
import chienCover from "../../assets/autour_du_chien-cover.jpg";

export default function AutourDuChien() {
  return (
    <AutourDuChienContainer>
      <Cover src={chienCover} alt="couverture de la page autour des chiens" />
      <TitleContainer>
        <Title1>Autour du chien</Title1>
        <BodyText>
          Le chien, meilleur ami de l’homme, est devenu omniprésent dans notre
          société.
        </BodyText>
        <BodyText>
          Apprend aux enfants comment se comporter face aux nombreux chiens
          qu’ils peuvent croiser est important pour prévenir les morsures sont
          la troisième cause d’accidents domestiques! C’est en ce sens que
          Rhizoome propose les ateliers de prévention morsure PECCRAM.{" "}
          <a href="#peccram">En savoir plus </a>
        </BodyText>
        <BodyText>
          Et parce que les chiens, par leur présence bienveillante, apaisent les
          enfants et améliorent leur confiance en eux, découvrez aussi le
          programme “LAC” qui consiste à aider le jeune public a retrouver
          l’audace et le plaisir de la lecture à voix haute!{" "}
          <a href="#lac">En savoir plus </a>
        </BodyText>
      </TitleContainer>
      <Peccram />
      <Lac />
    </AutourDuChienContainer>
  );
}
