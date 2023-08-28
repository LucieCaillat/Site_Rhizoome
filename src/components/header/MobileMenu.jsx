import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMobileMenu from "./DropdownMobileMenu";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const StyledDiv = styled.div`
    margin-right: 10%;
    @media only screen and (min-width: 768px) {
      display: none;
    }
  `;

  const HamburgerButton = styled.i`
    font-size: 40px;
    color: ${colors.police.nav};
  `;
  const MobileNav = styled.div`
    display: ${isOpen ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${colors.background.offWhite};
    z-index: 1000;
    & i.fa-times {
      position: fixed;
      top: 20px;
      right: 20px;
      font-size: 50px;
      color: ${colors.police.nav};
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
  const MobileNavLink = styled(Link)`
    text-decoration: none;
    color: ${colors.police.nav};
    font-weight: bold;
    font-size: ${fontSize.mobileNav};
    text-align: center;
    &:hover {
      filter: brightness(0.5);
    }
    @media only screen and (max-width: 450px) {
      font-size: ${fontSize.mobileNavM};
    }
    @media only screen and (max-width: 340px) {
      font-size: ${fontSize.mobileNavS};
    }
  `;

  return (
    <StyledDiv>
      <HamburgerButton
        className="fas fa-bars"
        onClick={() => setIsOpen(true)}
      ></HamburgerButton>
      <MobileNav>
        <i className="fas fa-times" onClick={() => setIsOpen(false)}></i>
        <ul className="mobile-menu-list">
          <li>
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
              Accueil
            </MobileNavLink>
          </li>
          <li>
            <MobileNavLink to="/QuiSommeNous" onClick={() => setIsOpen(false)}>
              Qui sommes-nous?
            </MobileNavLink>
          </li>
          <DropdownMobileMenu
            name="Activités"
            listLink={[
              { name: "Animation Nature", link: "/AnimationNature" },
              { name: "Autour du chien", link: "/AutourDuChien" },
              { name: "Mediation Par l'animal", link: "/MediationAnimal" },
            ]}
            action={() => setIsOpen(false)}
          />
          <DropdownMobileMenu
            name="Infos pratiques"
            listLink={[
              { name: "Les Publics", link: "/LesPublics" },
              { name: "Tarifs", link: "/Tarifs" },
              { name: "Contact", link: "/Contact" },
            ]}
            action={() => setIsOpen(false)}
          />
        </ul>
      </MobileNav>
    </StyledDiv>
  );
}
