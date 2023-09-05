import { useState } from "react";
import DropdownMobileMenu from "../dropdownMobileMenu/DropdownMobileMenu";
import {
  MobileMenuContainer,
  HamburgerButton,
  MobileNav,
  MobileNavLink,
} from "./MobileMenuStyle";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MobileMenuContainer>
      <HamburgerButton
        className="fas fa-bars"
        onClick={() => setIsOpen(true)}
      />
      <MobileNav open={isOpen ? "yes" : ""}>
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
    </MobileMenuContainer>
  );
}
