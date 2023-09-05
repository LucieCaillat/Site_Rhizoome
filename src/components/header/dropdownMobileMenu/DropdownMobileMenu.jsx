import { useState } from "react";
import {
  DropdownContainer,
  MobileMenuLink,
  StyledPullDownMenu,
} from "./DropdownMobileMenuStyle";

export default function DropdownMobileMenu({ name, listLink, action }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <MobileMenuLink
        className="title"
        onClick={() => setIsOpen(!isOpen)}
        open={isOpen ? "yes" : ""}
      >
        {name}
        <i className="fas fa-chevron-up"></i>
        <i className="fas fa-chevron-down"></i>
      </MobileMenuLink>
      <StyledPullDownMenu open={isOpen ? "yes" : ""}>
        {listLink.map((link) => (
          <li key={link.name}>
            <MobileMenuLink to={link.link} onClick={action}>
              {link.name}
            </MobileMenuLink>
          </li>
        ))}
      </StyledPullDownMenu>
    </DropdownContainer>
  );
}
