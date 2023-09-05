import styled from "styled-components";
import colors from "../../../utils/style/colors";

export const Chevron = styled.i`
  font-size: 18px;
  margin-left: 5px;
  &.fa-chevron-up {
    display: ${({ open }) => (open === "yes" ? "none" : "inline")};
  }
  &.fa-chevron-down {
    display: ${({ open }) => (open === "yes" ? "inline" : "none")};
  }
`;

export const StyledPullDownMenu = styled.ul`
  display: ${({ open }) => (open === "yes" ? "block" : "none")};
  position: absolute;
  background: ${colors.offWhite};
  padding: 5px;
  border-radius: 2px;
  z-index: 100;
  & li {
    list-style-type: none;
    margin: 5px;
  }
`;
