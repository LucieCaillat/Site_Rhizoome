import { TagContainer } from "./TagStyle";
const couleurTag = {
  "ADAPTABLE TOUS PUBLIC": "	#C5C300",
  ÉCOLES: "#5B67AE",
  "CENTRE DE LOISIRS": "	#019097",
};

export default function AnimationDropdown({ title }) {
  let color = false;
  if (couleurTag[title]) {
    color = couleurTag[title];
  }

  return <TagContainer color={color}>{title}</TagContainer>;
}
