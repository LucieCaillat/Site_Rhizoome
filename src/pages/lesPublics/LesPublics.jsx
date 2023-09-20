import {
  PublicsContainer,
  TypesOfPublicsContainer,
  TypeOfPublics,
} from "./LesPublicsStyle";
import { Title1, Title2, BodyText } from "../../globalStyle";

export default function LesPublics() {
  return (
    <PublicsContainer>
      <Title1>Pour qui et où ?</Title1>
      <TypesOfPublicsContainer>
        <TypeOfPublics className="ecole">
          <Title2>À l'école ou en centre de loisirs</Title2>
          <i className="fa-solid fa-school" />
          <BodyText>
            Pendant le temps scolaire et périscolaire ou en centre de loisirs le
            mercredi et pendant les vacances.
          </BodyText>
        </TypeOfPublics>

        <TypeOfPublics className="autre-structure">
          <Title2>Dans d'autres structures</Title2>
          <i className="fa-solid fa-landmark" />
          <BodyText>
            Dans les crèches, les EHPAD, les structures de l'éducation
            spécialisée, les hôpitaux, les FAM, les médiathèques, MJC,
            associations...
          </BodyText>
        </TypeOfPublics>

        <TypeOfPublics className="particulier">
          <Title2>
            Chez les <br />
            particuliers
          </Title2>
          <i className="fa-solid fa-house-chimney-user" />
          <BodyText>
            A votre domicile, avec vos enfants et d’autres… Accompagnements
            personnalisés, soutien scolaire, aide aux devoirs, anniversaires...
          </BodyText>
        </TypeOfPublics>
      </TypesOfPublicsContainer>
    </PublicsContainer>
  );
}
