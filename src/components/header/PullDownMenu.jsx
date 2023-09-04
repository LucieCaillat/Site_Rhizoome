import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useState } from "react";
import { NavLink } from "./Header";

export default function PullDownMenu({ name, listLink }) {
  const [isOpen, setIsOpen] = useState(false);
  const Chevron = styled.i`
    font-size: 18px;
    margin-left: 5px;
    &.fa-chevron-up {
      display: ${isOpen ? "none" : "inline"};
    }
    &.fa-chevron-down {
      display: ${isOpen ? "inline" : "none"};
    }
  `;

  const StyledPullDownMenu = styled.ul`
    display: ${isOpen ? "block" : "none"};
    position: absolute;
    background: ${colors.offWhite};
    padding: 5px;
    border-radius: 2px;
    z-index: 100;
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
      <NavLink onClick={() => setIsOpen(!isOpen)}>
        {name}
        <Chevron className="fas fa-chevron-up"></Chevron>
        <Chevron className="fas fa-chevron-down"></Chevron>
      </NavLink>
      <StyledPullDownMenu>
        {/* {listLink.map((link) => (
          <li key={link.name}>
            <NavLink to={link.link}>{link.name}</NavLink>
          </li>
        ))} */}
      </StyledPullDownMenu>
    </li>
  );
}
