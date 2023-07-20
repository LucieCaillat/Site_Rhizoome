import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import { useState } from "react";
import { NavLink } from "./Header";
import { Link } from "react-router-dom";

export default function PullDownMenu({ name, listLink }) {
  const [isOpen, setIsOpen] = useState(false);
  const Button = styled(Link)`
    text-decoration: none;
    color: ${colors.police.nav};
    font-size: ${fontSize.nav};
    font-weight: bold;
    &:hover {
      filter: brightness(0.5);
    }
    & i {
      font-size: 15px;
      margin-left: 5px;
    }
    & .fa-chevron-up {
      display: ${isOpen ? "none" : "inline"};
    }
    & .fa-chevron-down {
      display: ${isOpen ? "inline" : "none"};
    }
  `;

  const StyledPullDownMenu = styled.ul`
    display: ${isOpen ? "block" : "none"};
    position: absolute;
    background: ${colors.background.header};
    padding: 5px;
    border-radius: 2px;
    & li {
      list-style-type: none;
      margin: 5px;
    }
  `;

  return (
    <li
      onMouseLeave={(e) => {
        setIsOpen(false);
      }}
    >
      <Button onClick={() => setIsOpen(!isOpen)}>
        {name}
        <i className="fas fa-chevron-up"></i>

        <i className="fas fa-chevron-down"></i>
      </Button>
      <StyledPullDownMenu>
        {listLink.map((link) => (
          <li key={link.name}>
            <NavLink to={link.link}>{link.name}</NavLink>
          </li>
        ))}
      </StyledPullDownMenu>
    </li>
  );
}
