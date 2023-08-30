import colors from "../../utils/style/colors";
import { TagContainer } from "./TagStyle";

const couleurTag = colors.couleurTag;

export default function AnimationDropdown({ title }) {
  let color = false;
  if (couleurTag[title]) {
    color = couleurTag[title];
  }

  return <TagContainer color={color}>{title}</TagContainer>;
}
