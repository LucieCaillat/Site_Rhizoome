import { InfoBoxesContainer } from "./InfoBoxesStyle";
import InfoBox from "../../infoBox/InfoBox";

export default function InfoBoxes() {
  return (
    <InfoBoxesContainer>
      <InfoBox icon="fa-solid fa-child">
        <ul>
          <li>
            Renforcement de la conscience du corps (toucher, ouïe, odorat,
            poursuite visuelle).
          </li>
          <li>
            Libération d’hormone bénéfiques ( bien être, réduction du stress,
            abaissement du rythme cardiaque et de la pression artérielle).
          </li>
          <li>
            Amélioration de la mobilité, la mémoire et les performances
            intellectuelles.
          </li>
        </ul>
      </InfoBox>

      <InfoBox icon="fa-solid fa-brain">
        <ul>
          <li>Régulation émotionnelle</li>
          <li>Apport de réconfort et de joie/</li>
          <li>Augmentation de l’estime de soi</li>
          <li>Source de motivation et responsabilisation</li>
        </ul>
      </InfoBox>
      <InfoBox icon="fa-solid fa-hand">
        <ul>
          <li>Ajustement des comportements sociaux.</li>
          <li>Apaisement des conflits</li>
          <li>prise d'initiative et de décision.</li>
          <li>Développement de la communication verbale et non verbale.</li>
        </ul>
      </InfoBox>
    </InfoBoxesContainer>
  );
}
