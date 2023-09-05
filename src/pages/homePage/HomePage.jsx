import Carousel from "../../components/homePage/carousel/Carousel";
import ActivitiesBox from "../../components/homePage/activitiesBox/ActivitiesBox";
import TeamPart from "../../components/homePage/teamPart/TeamPart";
import BeforeFooter from "../../components/footer/BeforeFooter";
import {
  HomePageContainer,
  HomePageTitle,
  HomePageIntroduction,
} from "./HomePageStyle";
import { Title2, BodyText } from "../../globalStyle";

export default function HomePage() {
  return (
    <HomePageContainer>
      <Carousel />
      <HomePageTitle>
        Animation nature <br />
        & Médiation animale <br />
        <span>dans le Val d’Oise et la région parisienne</span>
      </HomePageTitle>
      <HomePageIntroduction>
        <Title2>Découvrez la nature, les animaux et leurs bienfaits !</Title2>
        <BodyText>
          La nature et les animaux ont beaucoup à nous apporter. Rhizoome est
          une entreprise innovante, basée à Jouy le Moutier (95) alliant
          sensibilisation à l’environnement et relation d’aide médiatisée par
          l’animal et la nature. Nous intervenons pour différents publics, avec
          ou sans animaux, pour des interventions ludiques, pédagogiques ou
          thérapeutiques, adaptées au public, modulables et diversifiées!
        </BodyText>
      </HomePageIntroduction>
      <ActivitiesBox />
      <TeamPart title="Venez rencontrer l’équipe d’animation !">
        Je suis Florine DAVI, animatrice nature et intervenante en médiation
        animale. Mes animaux vivent avec moi au sein de mon foyer. Ils sont
        éduqués et préparés aux séances. Le suivi vétérinaire est rigoureusement
        respecté et tous les vaccins et contrôles sont à jour.
      </TeamPart>
      <BeforeFooter />
    </HomePageContainer>
  );
}

export { Title2, BodyText };
