import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 30vh;
  object-fit: cover;
`;
export const Introduction = styled.section`
  width: 100%;
  padding: 50px 5% 80px;
  background-color: ${colors.green};
`;
