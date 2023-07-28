import styled from "styled-components";
import colors from "../utils/style/colors";
import fontSize from "../utils/style/fontSize";
import Carousel from "../components/homePage/Carousel";
import ActivityFrames from "../components/homePage/ActivityFrames";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  position: absolute;
  top: 15vh;
  left: 5%;
  height: 0px;
  margin: 0px;
  color: ${colors.police.title};
  font-size: ${fontSize.title};
  padding: 0;
  & span {
    display: block;
    color: ${colors.police.subtitle};
    font-size: ${fontSize.subtitle};
  }
`;

const Introduction = styled.div`
  background-color: ${colors.background.lightBrown};
  color: ${colors.police.title};
  padding: 50px 5%;
`;
const Title2 = styled.h2`
  margin-top: 0px;
  font-size: ${fontSize.title2};
`;
const BodyText = styled.p`
  font-size: ${fontSize.bodyText};
  font-weight: bold;
`;

export default function HomePage() {
  return (
    <StyledHomePage>
      <Carousel />
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
      <ActivityFrames />
    </StyledHomePage>
  );
}
