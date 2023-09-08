import { AlertContainer } from "./AlertUnderConstructionStyle";
import { Title2, BodyText } from "../../globalStyle";

export default function AlertUnderConstruction({ type }) {
  console.log(type);
  return (
    <AlertContainer type={type}>
      <Title2>Le site est en cours de construction</Title2>
      <BodyText>Veuillez nous excuser pour les désagréments</BodyText>
      <i className="fas fa-wrench"></i>
    </AlertContainer>
  );
}
