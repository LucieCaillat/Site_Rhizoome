import styled from "styled-components";
import colors from "../../utils/style/colors";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import PullDownMenu from "./PullDownMenu";

const HeaderDiv = styled.nav`
  width: 100%;
  height: 10vh;
  background: ${colors.background.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 200px;
`;
const List = styled.ul`
  width: 500px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 0;
  margin-right: 5%;
  color: ${colors.police.nav};
  & li {
    list-style-type: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.police.nav};
`;

export default function Header() {
  return (
    <HeaderDiv>
      <Link to="/">
        <Logo src={logo} alt="portSee" />
      </Link>
      <List>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <PullDownMenu
          name="Activité"
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
          name="Info pratiques"
          listLink={[
            { name: "Les Publics", link: "/LesPublics" },
            { name: "Tarifs", link: "/Tarifs" },
            { name: "Contact", link: "/Contact" },
          ]}
        />
      </List>
    </HeaderDiv>
  );
}

export { NavLink };
