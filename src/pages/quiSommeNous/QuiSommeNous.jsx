import { QuiSommeNousContainer } from "./QuiSommeNousStyle";
import FlorinePresentation from "../../components/florinePresentation/FlorinePresentation";
import Pets from "../../components/pets/Pets";
import { Title1, Title2, Cover } from "../../globalStyle";
import listPets from "../../data/listPets";
import cover from "../../assets/carousel2.jpg";

export default function QuiSommeNous() {
  return (
    <QuiSommeNousContainer>
      <Cover src={cover} alt="Qui sommes nous?" />
      <Title1>Qui sommes nous ?</Title1>
      <FlorinePresentation />
      <Title2 className="pets-title" id="les-chiens">
        Les Chiens
      </Title2>
      {listPets.chiens.map((pet, index) => (
        <Pets
          key={pet.title}
          title={pet.title}
          img={pet.img}
          text={pet.text}
          orientation={index % 2 === 0 ? "left" : "right"}
        />
      ))}

      <Title2 className="pets-title" id="les-chèvres">
        Les Chèvres
      </Title2>
      {listPets.chevres.map((pet, index) => (
        <Pets
          key={pet.title}
          title={pet.title}
          img={pet.img}
          text={pet.text}
          orientation={index % 2 === 0 ? "left" : "right"}
        />
      ))}

      <Title2 className="pets-title" id="les-lapins">
        Les Lapins
      </Title2>
      {listPets.lapins.map((pet, index) => (
        <Pets
          key={pet.title}
          img={pet.img}
          text={pet.text}
          orientation={index % 2 === 0 ? "left" : "right"}
        />
      ))}

      <Title2 className="pets-title" id="les-cochon-d-inde">
        Les Cochons d'inde
      </Title2>
      {listPets.cochonsDIndes.map((pet, index) => (
        <Pets
          key={pet.title}
          title={pet.title}
          img={pet.img}
          text={pet.text}
          orientation={index % 2 === 0 ? "left" : "right"}
        />
      ))}

      <Title2 className="pets-title" id="les-poules">
        Les Poules
      </Title2>
      {listPets.poules.map((pet, index) => (
        <Pets
          key={pet.title}
          title={pet.title}
          img={pet.img}
          text={pet.text}
          orientation={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </QuiSommeNousContainer>
  );
}
