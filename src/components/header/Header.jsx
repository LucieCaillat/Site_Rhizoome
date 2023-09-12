import logo from "../../assets/logo.png";
import PullDownMenu from "./pullDownMenu/PullDownMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import {
  HeaderStyled,
  HeaderContainer,
  HeaderLogo,
  Nav,
  NavLink,
} from "./HeaderStyle";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="fake-header"></div>

      <HeaderContainer>
        <HeaderLogo to="/">
          <img src={logo} alt="portSee" />
        </HeaderLogo>
        <Nav>
          <ul className="ul-nav">
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
          </ul>
        </Nav>
        <MobileMenu />
      </HeaderContainer>
    </HeaderStyled>
  );
}

export { NavLink };
