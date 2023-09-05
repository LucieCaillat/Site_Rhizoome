import { useState } from "react";
import { NavLink } from "../HeaderStyle";
import { Chevron, StyledPullDownMenu } from "./PullDownStyle";

export default function PullDownMenu({ name, listLink }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      onMouseLeave={(e) => {
        setIsOpen(false);
      }}
    >
      <NavLink onClick={() => setIsOpen(!isOpen)}>
        {name}
        <Chevron className="fas fa-chevron-up" open={isOpen ? "yes" : ""} />
        <Chevron className="fas fa-chevron-down" open={isOpen ? "yes" : ""} />
      </NavLink>
      <StyledPullDownMenu open={isOpen ? "yes" : ""}>
        {listLink.map((link) => (
          <li key={link.name}>
            <NavLink to={link.link}>{link.name}</NavLink>
          </li>
        ))}
      </StyledPullDownMenu>
    </li>
  );
}
