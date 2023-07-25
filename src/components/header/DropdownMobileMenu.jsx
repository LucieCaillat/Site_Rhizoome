import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DropdownMobileMenu({ name, listLink, action }) {
  const [isOpen, setIsOpen] = useState(false);

  const StyledDropdown = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
  `;
  const MobileMenuLink = styled(Link)`
    text-decoration: none;
    color: ${colors.police.nav};
    font-size: ${fontSize.mobileNav};
    font-weight: bold;
    &:hover {
      filter: brightness(0.5);
    }
    &.title {
      color: ${isOpen ? colors.police.subtitle : ""};
    }
    & i {
      font-size: 45px;
      margin-left: 10px;
    }
    & .fa-chevron-up {
      display: ${isOpen ? "none" : "inline"};
    }
    & .fa-chevron-down {
      display: ${isOpen ? "inline" : "none"};
    }
  `;

  const StyledPullDownMenu = styled.ul`
    display: ${isOpen ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background: white;
    padding: 20px;

    & li {
      list-style-type: none;
      margin: 0px;
    }
  `;

  return (
    <StyledDropdown>
      <MobileMenuLink className="title" onClick={() => setIsOpen(!isOpen)}>
        {name}
        <i className="fas fa-chevron-up"></i>
        <i className="fas fa-chevron-down"></i>
      </MobileMenuLink>
      <StyledPullDownMenu>
        {listLink.map((link) => (
          <li key={link.name}>
            <MobileMenuLink to={link.link} onClick={action}>
              {link.name}
            </MobileMenuLink>
          </li>
        ))}
      </StyledPullDownMenu>
    </StyledDropdown>
  );
}
