import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import { Link } from "react-router-dom";

const StyledBeforeFooter = styled.footer`
  width: 100%;
  height: 500px;
  background-color: ${colors.background.offWhite};
`;

export default function BeforeFooter() {
  return <StyledBeforeFooter></StyledBeforeFooter>;
}
