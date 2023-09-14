import { CvContainer, SmallBodyText } from "./CvStyle";

export default function Cv({ type }) {
  return (
    <CvContainer type={type}>
      <SmallBodyText>
        <h3>Mini CV</h3>
        <p>Florine Davi</p>
        <ul>
          <li>2014 : Master Environnement </li>
          <li>
            2015 : Animatrice nature à médiation animale en association / BAFA
          </li>
          <li>2016 : Professeure des écoles</li>
          <li>2017-2019 : Animatrice nature en ferme pédagogique</li>
          <li>2020 : Éducatrice spécialisée</li>
          <li>
            2022 : Formation en médiation par l'animal par AZCO <br />
            Formation PECCRAM et LAC par Chantal Hazard
          </li>
        </ul>
      </SmallBodyText>
    </CvContainer>
  );
}
