import AnimationDropdown from "../../components/animationDropdown/AnimationDropdown";
import listAnimation from "../../data/animationNature";

export default function AnimationNature() {
  return (
    <div>
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
    </div>
  );
}
