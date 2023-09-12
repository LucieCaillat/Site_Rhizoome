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
        <TypeOfPublics>
          <div className="publics-icon">
            <i className="fa-solid fa-school" />
          </div>
          <Title2>A l'école ou en centre de loisirs</Title2>
          <BodyText>
            Pendant le temps scolaire et périscolaire ou en centre de loisirs le
            mercredi et pendant les vacances.
          </BodyText>
        </TypeOfPublics>

        <TypeOfPublics>
          <div className="publics-icon">
            <i className="fa-solid fa-landmark" />
          </div>
          <Title2>Dans d'autres structures</Title2>
          <BodyText>
            Dans les crèches, les EHPAD, les structures de l'éducation
            spécialisée, les hôpitaux, les FAM, les médiathèques, MJC,
            associations...
          </BodyText>
        </TypeOfPublics>

        <TypeOfPublics>
          <div className="publics-icon">
            <i className="fa-solid fa-house-chimney-user" />
          </div>

          <Title2>Chez les particuliers</Title2>
          <BodyText>
            A votre domicile, avec vos enfants et d’autres… Accompagnements
            personnalisés, soutien scolaire, aide aux devoirs, anniversaires...
          </BodyText>
        </TypeOfPublics>
      </TypesOfPublicsContainer>
    </PublicsContainer>
  );
}
