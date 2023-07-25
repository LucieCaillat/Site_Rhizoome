import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import PullDownMenu from "./PullDownMenu";
import MobileMenu from "./MobileMenu";

const HeaderDiv = styled.nav`
  width: 100%;
  height: 15vh;
  background: ${colors.background.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(Link)`
  margin-left: 2%;
  & img {
    width: 300px;
    @media only screen and (max-width: 1050px) {
      width: 250px;
    }
  }
`;
const List = styled.ul`
  width: 660px;
  display: flex;
  justify-content: space-between;
  font-size: ${fontSize.nav};
  padding: 0;
  margin-right: 5%;
  color: ${colors.police.nav};
  & li {
    list-style-type: none;
  }
  @media only screen and (max-width: 1050px) {
    width: 500px;
    margin-right: 2%;
  }

  @media only screen and (max-width: 770px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.police.nav};
  font-weight: bold;
  &:hover {
    filter: brightness(0.5);
  }
  @media only screen and (max-width: 1050px) {
    font-size: 18px;
  }
`;

export default function Header() {
  return (
    <HeaderDiv>
      <Logo to="/">
        <img src={logo} alt="portSee" />
      </Logo>
      <List>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/QuiSommeNous">Qui sommes-nous?</NavLink>
        </li>
        <PullDownMenu
          name="Activités"
          listLink={[
            { name: "Animation Nature", link: "/AnimationNature" },
            { name: "Autour du chien", link: "/AutourDuChien" },
            { name: "Mediation Par l'animal", link: "/MediationAnimal" },
          ]}
        />
        <PullDownMenu
          name="Infos pratiques"
          listLink={[
            { name: "Les Publics", link: "/LesPublics" },
            { name: "Tarifs", link: "/Tarifs" },
            { name: "Contact", link: "/Contact" },
          ]}
        />
      </List>
      <MobileMenu />
    </HeaderDiv>
  );
}

export { NavLink };
