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
import { BodyText, Title3 } from "../../globalStyle";
import Tag from "../tag/Tag";
import colors from "../../utils/style/colors";

const AnimationTopicColors = colors.animationTopicColors;

export default function AnimationDropdown({
  title,
  descrition,
  img,
  goals,
  tags,
  topic,
  orientation,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hatColor = AnimationTopicColors[topic][0];
  const descriptionColor = AnimationTopicColors[topic][1];

  return (
    <AnimationDropdownContainer open={isOpen ? "yes" : ""}>
      <Hat
        open={isOpen ? "yes" : ""}
        onClick={() => setIsOpen(!isOpen)}
        color={hatColor}
      >
        <Title3>{title}</Title3>
        <i className="fas fa-chevron-up"></i>
        <i className="fas fa-chevron-down"></i>
      </Hat>

      <Body open={isOpen ? "yes" : ""}>
        <Description orientation={orientation} color={descriptionColor}>
          <BodyText>{descrition}</BodyText>
        </Description>

        <LowerPart orientation={orientation}>
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
