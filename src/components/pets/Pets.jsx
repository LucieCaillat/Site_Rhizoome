import { PetContainer } from "./PetsStyle";
import { Title3, BodyText } from "../../globalStyle";

export default function Pets({ img, title, text, orientation }) {
  return (
    <PetContainer orientation={orientation}>
      <img src={img} alt={title} className="pets-img" />
      <div className="pets-text">
        <Title3>{title}</Title3>
        <BodyText color="black">{text}</BodyText>
      </div>
    </PetContainer>
  );
}
