import {
  TarifsContainer,
  TarifsBoxesContainer,
  TarifsBox,
} from "./TarifsStyle";
import { Title1, Title2, BodyText, SmallBodyText } from "../../globalStyle";
import BeforeFooter from "../../components/footer/BeforeFooter";

export default function Tarifs() {
  return (
    <TarifsContainer>
      <Title1>Tarifs</Title1>
      <TarifsBoxesContainer>
        <TarifsBox className="tarifs_anim_nat">
          <Title2>Les animations nature</Title2>
          <BodyText>
            Demi-journée : A partir de 180€ <br />
            Journée : A partir de 260€{" "}
          </BodyText>
          <BodyText className="frais">+ Frais de déplacement</BodyText>
          <SmallBodyText>
            Le prix varie en fonction de l’animation choisie (matériel, achats
            alimentaires…), du créneau horaire et du lieu d’intervention.{" "}
          </SmallBodyText>
        </TarifsBox>

        <TarifsBox className="tarifs_autour_chien">
          <Title2>LAC/PECCRAM</Title2>
          <BodyText>
            70€ la séance d’une heure <br />
            140€ l’animation de 2h
          </BodyText>
          <BodyText className="frais">+ Frais de déplacement</BodyText>
        </TarifsBox>
      </TarifsBoxesContainer>
      <TarifsBoxesContainer>
        <TarifsBox className="tarifs_médiation_a">
          <Title2>Médiation animale</Title2>
          <BodyText>
            100€ la séance d’une heure <br />
            Formule 2*45min : 190€ <br />
            <span>(permettre à deux groupes de pouvoir passer)</span> :
          </BodyText>
          <BodyText className="frais">+ Frais de déplacement</BodyText>
        </TarifsBox>

        <TarifsBox className="tarifs_particuliers">
          <Title2>Particuliers</Title2>
          <BodyText>
            Ateliers individuels personnalisé: à partir de 50€
            <br />
            Anniversaire <span>(environ 2h)</span> : à partir de 180€
            <br />
            <span>
              (limité à 10 enfants, + adultes encadrants, gâteau non fourni)
            </span>
          </BodyText>
          <BodyText className="frais">+ Frais de déplacement</BodyText>
          <SmallBodyText>
            Le prix varie en fonction de l’animation choisie, du créneau horaire
            et du lieu d’intervention.
          </SmallBodyText>
        </TarifsBox>
      </TarifsBoxesContainer>
      <Title2 className="tarif_contactez_moi">
        Demandez moi un devis personnalisé !
      </Title2>
      <BeforeFooter />
    </TarifsContainer>
  );
}
