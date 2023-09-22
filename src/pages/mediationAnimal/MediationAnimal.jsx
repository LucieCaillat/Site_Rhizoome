import {
  MediationAnimalContainer,
  TitleContainer,
  TextContainer,
  TextImgContainer,
} from "./MediationAnimalStyle";
import { Title1, Title2, BodyText, Citation } from "../../globalStyle";
import InfoBoxes from "../../components/inPageMediationAnimal/infoBoxes/InfoBoxes";
import BeforeFooter from "../../components/footer/BeforeFooter";
import img1 from "../../assets/mediation_animal_1.jpg";
import img2 from "../../assets/mediation_animal_2.jpg";
import deroulementSeance from "../../assets/deroulement_seance.png";

export default function MediationAnimal() {
  return (
    <MediationAnimalContainer>
      <TitleContainer>
        <Title1>Médiation par l’animal</Title1>
        <Citation>
          "L’animal ne se nourrit pas d’attentes idéalisées envers les humains,
          il les accepte pour ce qu’ils sont et non pas pour ce qu’ils devraient
          être."
          <br />
          Boris Levinson{" "}
        </Citation>
      </TitleContainer>
      <TextContainer>
        <TextImgContainer>
          <img src={img1} alt="un homme fait un calin à une chevre" />
          <BodyText>
            Par ce qu’il ne juge pas, parce qu’il ne se soucie pas de
            l’apparence, ne nous jalouse pas et nous accepte tels que nous
            sommes, l’animal nous fait du bien. Il parvient souvent à faire
            tomber les barrières sociales et psychologiques, ce qui permet
            d’aller plus facilement à la rencontre des personnes. Sa présence
            est réconfortante et calmante, il envoie des signes de valorisation,
            redonne confiance, responsabilise et incite à la motricité.
          </BodyText>
        </TextImgContainer>
        <BodyText className="center-text">
          La médiation par l’animal est basée sur l’attrait que les animaux
          exercent auprès des personnes et sur leurs capacités à les stimuler et
          à les apaiser. Elle recherche des interactions positives issue de la
          mise en relation Homme-animal dans le domaine éducatif, social ou
          thérapeutique.
        </BodyText>
        <TextImgContainer>
          <BodyText>
            Les ateliers de médiation animale de Rhizoome visent donc à mettre
            en contact des animaux familiers, spécifiquement éduqués, avec des
            personnes rencontrant, ou non, divers troubles, aussi bien moteurs
            que cognitifs, psychologiques ou sociaux, afin de susciter des
            réactions positives.
          </BodyText>
          <img src={img2} alt="" />
        </TextImgContainer>
      </TextContainer>
      <Title2>Les bienfaits apportés par la médiation animale</Title2>
      <InfoBoxes />
      <Title2>Déroulement d'une séance</Title2>
      <TextImgContainer>
        <img src={deroulementSeance} alt="" />
        <BodyText>
          Les séances se déroulent en intérieur ou en extérieur, la plupart du
          temps sur table avec nappe cirée mais pour les tout-petits les séances
          peuvent être proposées au sol, en cercle. Pour chaque participant des
          interactions adaptées à leur capacité et aux objectifs fixés en équipe
          en amont des séances sont proposées. Les ateliers peuvent être
          ponctuels ou réguliers avec une approche relationnelle, sociale,
          sensorielle, motrice et pédagogique.{" "}
        </BodyText>
      </TextImgContainer>
      <BodyText className="conlusion">
        N’hésitez pas à nous contacter pour discuter du projet que vous
        souhaitez mettre en place !
      </BodyText>
      <BeforeFooter />
    </MediationAnimalContainer>
  );
}
