import styled from "styled-components";
import colors from "../../utils/style/colors";

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ type }) => (type === "banner" ? "auto" : "85vh")};
  background-color: ${colors.orange};
  color: white;
  padding: 20px;
  & h2,
  p {
    text-align: center;
  }
  & i {
    display: ${({ type }) => (type === "banner" ? "none" : "inline")};
    margin: 50px;
    font-size: 20vw;
  }
`;
