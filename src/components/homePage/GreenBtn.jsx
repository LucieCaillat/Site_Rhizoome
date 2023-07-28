import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";
import fontSize from "../../utils/style/fontSize";

const Button = styled.button`
  background-color: ${colors.background.green};
  color: ${colors.police.cream};
  font-weight: bold;
  font-size: ${fontSize.greenBtn};
  border: none;
`;

export default function GreenBtn({ children, url }) {
  return (
    <Link to={url}>
      <Button> {children}</Button>
    </Link>
  );
}
