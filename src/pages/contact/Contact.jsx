import { ContactContainer } from "./ContactStyle";
import { Title1, Title2, BodyText } from "../../globalStyle";

export default function Contact() {
  return (
    <ContactContainer>
      <Title1>Contact</Title1>
      <BodyText className="contact-subtitle">
        Pour toute information ou demande de devis n'hésitez pas à me contacter
      </BodyText>
      <div className="contact-body">
        <Title2>Par téléphone</Title2>
        <BodyText> 06 70 14 23 84</BodyText>
        <Title2>Par mail</Title2>
        <BodyText> rhizoome95@gmail.com</BodyText>
      </div>
    </ContactContainer>
  );
}
