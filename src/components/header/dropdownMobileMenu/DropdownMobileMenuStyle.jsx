import styled from "styled-components";
import colors from "../../../utils/style/colors";
import fontSize from "../../../utils/style/fontSize";
import { Link } from "react-router-dom";

export const DropdownContainer = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MobileMenuLink = styled(Link)`
  text-decoration: none;
  color: ${colors.darkGray};
  font-size: ${fontSize.mobileNav};
  font-weight: bold;
  &:hover {
    filter: brightness(0.5);
  }
  &.title {
    filter: ${({ open }) =>
      open === "yes" ? "brightness(1.5)" : "brightness(1)"};
  }
  & i {
    font-size: 45px;
    margin-left: 10px;
  }
  & .fa-chevron-up {
    display: ${({ open }) => (open === "yes" ? "none" : "inline")};
  }
  & .fa-chevron-down {
    display: ${({ open }) => (open === "yes" ? "inline" : "none")};
  }
  @media only screen and (max-width: 600px) {
    font-size: ${fontSize.mobileNavM};
    & i {
      font-size: 35px;
    }
  }
  @media only screen and (max-width: 400px) {
    font-size: ${fontSize.mobileNavS};
    & i {
      font-size: 25px;
    }
  }
`;

export const StyledPullDownMenu = styled.ul`
  display: ${({ open }) => (open === "yes" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  background: white;
  padding: 20px;
  margin: 5px 0 20px;

  & li {
    list-style-type: none;
    margin: 0px;
    text-align: center;
  }
`;
