import { PetContainer } from "./PetsStyle";
import { Title3, BodyText } from "../../globalStyle";
import colors from "../../utils/style/colors";

export default function Pets({ img, title, text, orientation }) {
  return (
    <PetContainer orientation={orientation}>
      <div>
        <img src={img} alt={title} className="pets-img" />
      </div>
      <div className="pets-text">
        <Title3>{title}</Title3>
        <BodyText color={colors.darkGray}>{text}</BodyText>
      </div>
    </PetContainer>
  );
}
