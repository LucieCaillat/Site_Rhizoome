import { PartContainer, TagBox, TextImgContainer } from "./AutourDuChienStyle";
import { BodyText, Title2 } from "../../globalStyle";
import Tag from "../../components/tag/Tag";
import peluches from "../../assets/PECCRAM_peluches.jpg";
import peccramEnfant from "../../assets/PECCRAM-enfant.jpg";

export default function Peccram() {
  return (
    <PartContainer id="peccram">
      <Title2>
        <span>P</span>rogramme d’<span>É</span>ducation à la <span>C</span>
        onnaissance du <span>C</span>hien et au <span>R</span>isque d’
        <span>A</span>ccidents par <span>M</span>orsures
        <br />(<span>PECCRAM</span> )
      </Title2>

      <BodyText>
        PECCRAM est un programme éducatif sur la connaissance du chien destiné
        aux enfants de 4 à 10 ans qui a pour but de prévenir et réduire les
        accidents par morsure.
      </BodyText>
      <TextImgContainer>
        <BodyText>
          Ce programme, déjà reconnu par le Ministère de l’Agriculture, de la
          Santé et la communauté scientifique vétérinaire est réalisé à l’aide
          de supports pédagogiques adaptés (images, jeux de rôle,mises en
          situation, petits films…), avec OU sans chien mais toujours avec des
          peluches réalistes, pour apprendre aux enfants à mieux connaître les
          chiens et à adopter les bons comportements en leur présence.
        </BodyText>
        <figure>
          <img src={peluches} alt="Les peluches du programme PECCRAM" />
          <figcaption>Les peluches du programme PERCCRAM</figcaption>
        </figure>
      </TextImgContainer>
      <TextImgContainer>
        <figure>
          <img
            src={peccramEnfant}
            alt="Enfant qui tend la main à Pirate le chien"
          />
          <figcaption>
            "Apprendre aux enfants les bons comportements"
          </figcaption>
        </figure>
        <BodyText>
          Il peut être réalisé en une séance découverte de 2h ou en plusieurs
          séances de 45min à 2h, afin d’aborder plus de sujets en lien avec le
          chien (le langage corporel du chien, jeux des émotions, les métiers
          autour du chien, la promenade citoyenne et respectueuse avec le chien
          (déjections)…) et de coller sur une période complète en TAP ou centre
          de loisirs.{" "}
        </BodyText>
      </TextImgContainer>

      <BodyText>
        PECCRAM peut aussi se combiner avec des séances de médiation par
        l'animal et ainsi permettre de travailler, pour les particuliers, autour
        d'une phobie du chien.
      </BodyText>
      <BodyText className="program_for">Un programme pour :</BodyText>
      <TagBox>
        <Tag title="CENTRE DE LOISIRS" />
        <Tag title="STRUCTURES DE L'ÉDUCATION SPÉCIALISÉE" />
        <Tag title="PARTICULIERS" />
      </TagBox>
    </PartContainer>
  );
}
