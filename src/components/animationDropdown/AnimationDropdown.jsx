import { useState } from "react";
import {
  AnimationDropdownContainer,
  Hat,
  Body,
  Description,
  LowerPart,
  Goals,
  TagBox,
} from "./AnimationDropdownStyle";
import Tag from "../tag/Tag";

const AnimationTopicColors = {
  autourDeLaFerme: ["	#935D26", "#AF7634"],
  autourDeLaNature: ["#66A316", "#87BD28"],
  autourDuDD: ["#CF3D02", "#E95C13"],
};

export default function AnimationDropdown({
  title,
  descrition,
  img,
  goals,
  tags,
  topic,
  isLeftSide,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hatColor = AnimationTopicColors[topic][0];
  const descriptionColor = AnimationTopicColors[topic][1];

  return (
    <AnimationDropdownContainer>
      <Hat isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} color={hatColor}>
        <h3>{title}</h3>
        <i className="fas fa-chevron-up"></i>
        <i className="fas fa-chevron-down"></i>
      </Hat>

      <Body isOpen={isOpen}>
        <Description isLeftSide={isLeftSide} color={descriptionColor}>
          <p>{descrition}</p>
        </Description>

        <LowerPart isLeftSide={isLeftSide}>
          <img src={img} alt={title}></img>

          <div className="objectif-side">
            <Goals>
              <span>Objectifs:</span>
              <ul>
                {goals.map((goal) => (
                  <li key={`${title + goal}`}>{goal}</li>
                ))}
              </ul>
            </Goals>
            <TagBox>
              {tags.map((tag, index) => (
                <Tag key={title + tag + index} title={tag} />
              ))}
            </TagBox>
          </div>
        </LowerPart>
      </Body>
    </AnimationDropdownContainer>
  );
}
