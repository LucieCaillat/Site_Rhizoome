import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useState } from "react";
import { NavLink } from "./Header";

export default function PullDownMenu({ name, listLink }) {
  const [isOpen, setIsOpen] = useState(false);
  const Button = styled.button`
    text-decoration: ${isOpen ? "underline" : "none"};
    border: none;
    background: none;
    color: ${colors.police.nav};
    font-size: 16px;
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
        console.log("coucou");
      }}
    >
      <Button onClick={() => setIsOpen(!isOpen)}>{name}</Button>
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
