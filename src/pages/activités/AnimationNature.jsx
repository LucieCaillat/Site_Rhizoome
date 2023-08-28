import AnimationDropdown from "../../components/animationDropdown/AnimationDropdown";
import poule from "../../assets/les_poules.jpg";

export default function AnimationNature() {
  return (
    <div>
      <AnimationDropdown
        title={"Découvert des animaux"}
        descrition={
          "Une approche ludique et imaginaire pour découvrir les poules et le mode de reproduction ovipare. Après une présentation des poules en visite, les enfants découvriront, au travers de petits ateliers, lacomposition de l’œuf , le développement du poussin à l’intérieur et le cycle de vie des poules."
        }
        img={poule}
        goals={[
          "Acquérir le vocabulaire lié aux poules et au poulailler",
          "Rencontrer les poules",
          "Voir la composition de l’œuf et le développement du poussin à l’intérieur",
          "Apprendre le cycle de vie de la poule",
          "Comprendre le mode de reproduction ovipare",
        ]}
        topic={"autourDeLaFerme"}
        isLeftSide={false}
      ></AnimationDropdown>
    </div>
  );
}
