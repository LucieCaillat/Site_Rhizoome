import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.div`
  & .fake-header {
    height: 15vh;
    background: ${colors.offWhite};
  }
`;
export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 10000;
  width: 100%;
  height: 12vh;
  background: linear-gradient(${colors.offWhite}, rgba(255, 247, 233, 0.95));
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;
export const HeaderLogo = styled(Link)`
  margin-left: 2%;
  width: 300px;
  & img {
    width: 100%;
  }
  @media only screen and (max-width: 1050px) {
    width: 50%;
    max-width: 250px;
  }
`;
export const Nav = styled.nav`
  width: 660px;
  margin-right: 5%;
  & .ul-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: ${fontSize.nav};
    padding: 0;
    & li {
      list-style-type: none;
    }
  }
  @media only screen and (max-width: 1050px) {
    width: 500px;
    margin-right: 2%;
  }

  @media only screen and (max-width: 770px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.darkGray};
  &:hover {
    filter: brightness(0.5);
  }
  @media only screen and (max-width: 1050px) {
    font-size: 18px;
  }
`;
