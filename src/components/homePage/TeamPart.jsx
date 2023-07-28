import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import { Title2, BodyText } from "../../pages/HomePage";

const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: ${colors.background.green};
  color: ${colors.police.cream};
`;

export default function TeamPart() {
  return (
    <Div>
      <div>
        {" "}
        <Title2>Venez rencontrer notre équipe d’animation !</Title2>
        <BodyText>
          Je suis Florine DAVI, animatrice nature et intervenante en médiation
          animale. Fascinée par la nature et les animaux depuis toujours,
          passionnée par la relation d’aide, j’ai travail- lé de nombreuses
          années dans les domaines de l’animation nature, de l’enseignement et
          de l’éducation spécialisée, avant de me lancer à mon compte. Mes
          animaux vivent avec moi au sein de mon foyer. Ils sont éduqués et
          préparés aux séances. Le suivi vétérinaire est rigoureusement respecté
          et tous les vaccins et contrôles sont à jour. Je vous laisse les
          découvrir!
        </BodyText>
      </div>
    </Div>
  );
}
