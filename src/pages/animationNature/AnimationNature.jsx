import AnimationDropdown from "../../components/animationDropdown/AnimationDropdown";
import listAnimation from "../../data/animationNature";
import BeforeFooter from "../../components/footer/BeforeFooter";
import {
  Cover,
  Introduction,
  AnimationContainer,
  TypeAnimationContainer,
} from "./AnimationNatureStyle";
import coquelicot from "../../assets/carousel2.jpg";
import { BodyText, Titre1, Title2 } from "../../globalStyle";
import colors from "../../utils/style/colors";

export default function AnimationNature() {
  return (
    <div>
      <Cover src={coquelicot} alt="coquelicot" />

      <Introduction>
        <Titre1 color={colors.darkBrown}>Animation nature</Titre1>
        <BodyText>
          En permettant une évolution des comportements, l’éducation à
          l’environnement joue un rôle crucial dans la préservation de notre
          planète. <br />
          <br /> C’est pourquoi, Rhizoome, qui a a cœur ses problématiques de
          sauvegarde de la nature et du vivant, propose de nombreux ateliers en
          lien avec la nature, la ferme, l’alimentation, ou le développement
          durable. Ces animations, modulables et adaptables aux différents
          publics, permettent à petits et grands d’apprendre tout en passant un
          bon moment.
          <br />
          <br />À la demi-journée ou à la journée, sur plusieurs séances ou en
          lien avec un projet de votre établissement, n’hésitez pas à me
          contacter pour me faire part de vos demandes !
        </BodyText>
      </Introduction>
      <AnimationContainer>
        <TypeAnimationContainer color={colors.translucentOrange}>
          <BodyText color={colors.darkBrown}>
            Découvrez nos animations :
          </BodyText>
          <Title2>Autour de la ferme</Title2>
          {listAnimation.autourDeLaFerme.map((animation, index) => (
            <AnimationDropdown
              key={"autourDeLaFerme" + index}
              title={animation.title}
              descrition={animation.description}
              img={animation.img}
              goals={animation.goals}
              tags={animation.tags}
              topic={"autourDeLaFerme"}
              isLeftSide={index % 2 === 0}
            ></AnimationDropdown>
          ))}
        </TypeAnimationContainer>

        <TypeAnimationContainer color={colors.translucentGreen}>
          <Title2>Autour de la nature</Title2>
          {listAnimation.autourDeLaNature.map((animation, index) => (
            <AnimationDropdown
              key={"autourDeLaNature" + index}
              title={animation.title}
              descrition={animation.description}
              img={animation.img}
              goals={animation.goals}
              tags={animation.tags}
              topic={"autourDeLaNature"}
              isLeftSide={index % 2 === 0}
            ></AnimationDropdown>
          ))}
        </TypeAnimationContainer>

        <TypeAnimationContainer color={colors.translucentYellow}>
          <Title2>
            Autour de l’alimentation <br />
            et du développement durable
          </Title2>
          {listAnimation.autourDuDD.map((animation, index) => (
            <AnimationDropdown
              key={"autourDuDD" + index}
              title={animation.title}
              descrition={animation.description}
              img={animation.img}
              goals={animation.goals}
              tags={animation.tags}
              topic={"autourDuDD"}
              isLeftSide={index % 2 === 0}
            ></AnimationDropdown>
          ))}
        </TypeAnimationContainer>
      </AnimationContainer>

      <BeforeFooter />
    </div>
  );
}
