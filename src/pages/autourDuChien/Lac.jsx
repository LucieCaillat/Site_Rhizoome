import { PartContainer, TagBox, TextImgContainer } from "./AutourDuChienStyle";
import { BodyText, Title2 } from "../../globalStyle";
import Tag from "../../components/tag/Tag";
import lacEnfant from "../../assets/lac.JPG";

export default function Lac() {
  return (
    <PartContainer id="lac">
      <Title2>
        <span>L</span>ire <span>A</span>vec le <span>C</span>hien
        <br />(<span>LAC</span>)
      </Title2>

      <BodyText>
        Lire Avec le Chien, ou comment retrouver l’audace de la lecture à haute
        voix grâce à la présence bienveillante du chien.
      </BodyText>
      <BodyText>
        Cette activité ludique consiste à mettre en relation un chien et un
        enfant qui lit le livre de son choix en présence du propriétaire du
        chien.
      </BodyText>

      <TextImgContainer>
        <BodyText>
          La présence bienveillante du chien est un élément facilitateur qui
          crée un climat de confiance propice à rassurer l'enfant mal à l'aise
          dans la lecture à haute voix. La lecture devient alors un temps de
          plaisir et de partage, le chien aide l’enfant à oser lire, à dépasser
          ses craintes et à gagner en confiance en soi, pour pouvoir ensuite
          surpasser ses difficultés en lecture.{" "}
        </BodyText>
        <figure>
          <img src={lacEnfant} alt="enfant qui lit un livre à un chien" />
          <figcaption>
            "La lecture devient alors un temps de plaisir "
          </figcaption>
        </figure>
      </TextImgContainer>
      <BodyText>
        Les séances sont généralement d’une durée d’1h30 à 2h, où chaque enfant
        vient alternativement pendant environ 10 à 15 min lire ou raconter des
        images d’un livre de son choix : à l’ intervenant, au chien, aux deux ou
        à lui-même. Un temps d’activités ludiques ou éducatives peut être
        proposé au reste du groupe. Cette activité peut être couplée à
        l’activité PECCRAM.{" "}
      </BodyText>
      <BodyText>Pour :</BodyText>
      <TagBox>
        <Tag title="ÉCOLES" />
        <Tag title="CENTRE DE LOISIRS" />
        <Tag title="BIBLIOTHEQUES" />
      </TagBox>
    </PartContainer>
  );
}
