import { useState } from "react";
import { InfoBoxContainer } from "./InfoBoxStyle";

export default function InfoBox({ children, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <InfoBoxContainer
      onClick={() => setIsOpen(!isOpen)}
      open={isOpen ? "yes" : ""}
    >
      <div className="info">{children}</div>
      <div className="icon">
        <i className={icon}></i>
      </div>
    </InfoBoxContainer>
  );
}
