import { PetContainer } from "./PetsStyle";
import { Title3, BodyText } from "../../globalStyle";
import colors from "../../utils/style/colors";

export default function Pets({ img, title, text, orientation, textsize }) {
  return (
    <PetContainer orientation={orientation} textsize={textsize}>
      <div className="pets-img">
        <img src={img} alt={title} />
      </div>
      <div className="pets-text">
        <Title3>{title}</Title3>
        <BodyText color={colors.darkGray}>{text}</BodyText>
      </div>
    </PetContainer>
  );
}
