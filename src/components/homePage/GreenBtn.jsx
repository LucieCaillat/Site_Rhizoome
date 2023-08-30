import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";
import fontSize from "../../utils/style/fontSize";

const Button = styled.button`
  background-color: ${colors.green};
  color: ${colors.offWhite};
  font-weight: bold;
  font-size: ${fontSize.greenBtn};
  padding: 13px;
  border: none;
  cursor: pointer;
  transform: scale(1);
  transition: transform 450ms;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function GreenBtn({ children, url }) {
  return (
    <Link to={url}>
      <Button> {children}</Button>
    </Link>
  );
}
