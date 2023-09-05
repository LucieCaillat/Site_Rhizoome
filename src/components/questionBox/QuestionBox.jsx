import { useState } from "react";
import { QuestionBoxContainer } from "./QuestionBoxStyle";

export default function QuestionBox({ children, question }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QuestionBoxContainer
      onClick={() => setIsOpen(!isOpen)}
      open={isOpen ? "yes" : ""}
    >
      <div className="question">
        <span>{question}</span>
      </div>
      <p className="answer">{children}</p>
    </QuestionBoxContainer>
  );
}
