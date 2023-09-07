import { AlertContainer } from "./AlertUnderConstructionStyle";
import { Title2, BodyText } from "../../globalStyle";

export default function AlertUnderConstruction({ type }) {
  console.log(type);
  return (
    <AlertContainer type={type}>
      <Title2>Le site est en court de construction</Title2>
      <BodyText>Veuillez nous excuser pour le désagrément</BodyText>
      <i className="fas fa-wrench"></i>
    </AlertContainer>
  );
}
