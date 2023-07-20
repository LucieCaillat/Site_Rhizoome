import styled from "styled-components";
import colors from "../utils/style/colors";
import bug from "../assets/bug.jpg";

const Cover = styled.img`
  height: 90vh;
  width: 100%;
`;

const Title = styled.h1`
  position: relative;
  top: -80vh;
  background-color: black;
  height: 0px;
  margin: 0px;
  color: ${colors.police.title};
  & span {
    color: ${colors.police.subtitle};
  }
`;

const Introduction = styled.div`
  background-color: ${colors.background.lightBrown};
  padding: 15px;
`;
const Title2 = styled.h2`
  font-size: 13px;
  margin-top: 0px;
`;
const BodyText = styled.p`
  font-size: 10px;
`;

export default function HomePage() {
  return (
    <div>
      <Cover src={bug} />
      <Title>
        Animation nature <br />
        & Médiation animale <br />
        <span>dans le Val d’Oise et la région parisienne</span>
      </Title>
      <Introduction>
        <Title2>Découvrez la nature, les animaux et leurs bienfaits !</Title2>
        <BodyText>
          La nature et les animaux ont beaucoup à nous apporter. Rhizoome est
          une entreprise innovante, basée à Jouy le Moutier (95) alliant
          sensibilisation à l’environnement et relation d’aide médiatisée par
          l’animal et la nature. Nous nous déplaçons dans votre structure, avec
          ou sans animaux, pour des interventions ludiques, pédagogiques ou
          thérapeutiques, adaptées au public, modulables et diversifiées!
        </BodyText>
      </Introduction>
    </div>
  );
}
