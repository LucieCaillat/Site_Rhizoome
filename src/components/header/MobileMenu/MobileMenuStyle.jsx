import styled from "styled-components";
import colors from "../../../utils/style/colors";
import fontSize from "../../../utils/style/fontSize";
import { Link } from "react-router-dom";

export const MobileMenuContainer = styled.div`
  margin-right: 10%;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerButton = styled.i`
  font-size: 40px;
  color: ${colors.darkGray};
`;
export const MobileNav = styled.nav`
  display: ${({ open }) => (open === "yes" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${colors.offWhite};
  z-index: 1000;
  & i.fa-times {
    position: fixed;
    top: 20px;
    right: 20px;
    font-size: 50px;
    color: ${colors.darkGray};
  }
  & ul.mobile-menu-list {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & li {
      list-style-type: none;
    }
  }
`;
export const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.darkGray};
  font-weight: bold;
  font-size: ${fontSize.mobileNav};
  text-align: center;
  &:hover {
    filter: brightness(0.5);
  }
  @media only screen and (max-width: 600px) {
    font-size: ${fontSize.mobileNavM};
  }
  @media only screen and (max-width: 400px) {
    font-size: ${fontSize.mobileNavS};
  }
`;
