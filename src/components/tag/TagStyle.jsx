import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";

export const TagContainer = styled.div`
  padding: 6px;
  color: ${colors.offWhite};
  font-size: ${fontSize.tag};
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${({ color }) => (color ? color : "red")};
`;
