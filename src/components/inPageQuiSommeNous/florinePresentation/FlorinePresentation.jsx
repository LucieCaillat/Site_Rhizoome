import { Title2, BodyText, BodyList } from "../../../globalStyle";
import { FlorineBox, RoundImage } from "./FlorinePresentationStyle";
import Cv from "../cv/Cv";
import florine2 from "../../../assets/florine2.jpg";

export default function FlorinePresentation() {
  return (
    <FlorineBox>
      <div className="florin-box_ghost-part"></div>
      <div className="florin-box_side-part">
        <RoundImage src={florine2} alt="Florine Davi" />
        <Cv />
      </div>
      <article>
        <Title2>Mon parcours</Title2>
        <BodyText>
          La nature et les animaux ont constamment été ma bulle de bien être,
          mon refuge et aussi loin que je me souvienne, j’ai toujours voulu
          travailler dans ce domaine. Transmettre ma passion pour les protéger
          et faire évoluer les comportements, faire découvrir aux personnes les
          bienfaits qu’ils peuvent nous apporter…
        </BodyText>
        <BodyText>
          … avec le recul, c’est comme si toutes les étapes de ma vie devaient
          me mener à la création de Rhizoome :
        </BodyText>
        <BodyList>
          <li>
            Mes études d’environnement m’ont apportés un esprit critique et des
            connaissances scientifiques indispensables.
          </li>
          <li>
            Ma passion pour les voyages et le woofing (travail contre logement
            dans des fermes) ma permis de connaître la réalité du terrain,
            d’acquérir des compétences sociales et de m’ouvrir au monde.
          </li>
          <li className="overflow-2">
            Mes expériences professionnelles, que ce soit en animation nature,
            en tant qu’éducatrice en FAM ou lors de mon passage à l’éducation
            nationale, m’ont appris à construire et animer des ateliers et à
            gérer des groupes de publics variés (familles, adultes, enfants,
            personnes en situation de handicap...).
          </li>
          <li className="overflow">
            Mes formations à la médiation animale, au PECCRAM et au programme
            LAC m’ont permis d’acquérir les certifications et les connaissances
            nécessaires pour dispenser ces types d’ateliers.
          </li>
        </BodyList>
        <BodyText className="overflow">
          Mais ce n’est qu’à la naissance de mon premier enfant en 2022, que
          j’ai réalisé que j’avais le potentiel de combiner toutes ces
          expériences pour créer une activité sur mesure et en accord avec mes
          valeurs… : Rhizoome naquit.
        </BodyText>
      </article>
    </FlorineBox>
  );
}
