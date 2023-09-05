import GreenBtn from "../../greenBtn/GreenBtn";
import { ActivitiesBoxContainer, ActivityBox } from "./ActivitiesBoxStyle";

export default function ActivitiesBox() {
  return (
    <ActivitiesBoxContainer>
      <ActivityBox>
        <p id="animation-nature">
          Animation
          <br />
          nature
        </p>
        <GreenBtn url="/AnimationNature">DÉCOUVRIR</GreenBtn>
      </ActivityBox>
      <ActivityBox>
        <p id="autour-du-chien">
          Autour
          <br />
          du chien <br />
          <span>PECCRAM & LAC</span>
        </p>
        <GreenBtn url="/AutourDuChien">DÉCOUVRIR</GreenBtn>
      </ActivityBox>
      <ActivityBox>
        <p id="médiation-animal">
          Médiation
          <br />
          par l'animal
        </p>
        <GreenBtn url="/MediationAnimal">DÉCOUVRIR</GreenBtn>
      </ActivityBox>
    </ActivitiesBoxContainer>
  );
}
