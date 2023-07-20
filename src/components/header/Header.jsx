import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import PullDownMenu from "./PullDownMenu";

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
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const MenuBars = styled.i`
  font-size: 30px;
  color: ${colors.police.nav};
  margin-right: 10%;
  @media only screen and (min-width: 768px) {
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
        <PullDownMenu
          name="Activités"
          listLink={[
            { name: "Animation Nature", link: "/AnimationNature" },
            { name: "Autour du chien", link: "/AutourDuChien" },
            { name: "Mediation Par l'animal", link: "/MediationAnimal" },
          ]}
        />
        <li>
          <NavLink to="/QuiSommeNous">Qui sommes-nous?</NavLink>
        </li>
        <PullDownMenu
          name="Infos pratiques"
          listLink={[
            { name: "Les Publics", link: "/LesPublics" },
            { name: "Tarifs", link: "/Tarifs" },
            { name: "Contact", link: "/Contact" },
          ]}
        />
      </List>
      <MenuBars className="fas fa-bars"></MenuBars>
    </HeaderDiv>
  );
}

export { NavLink };
