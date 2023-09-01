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
      <Title2 className="pets-title">Les Chiens</Title2>
      {listPets.chiens.map((pet, index) => (
        <Pets
          key={pet.title}
          title={pet.title}
          img={pet.img}
          text={pet.text}
          isLeftSide={index % 2 === 0}
        />
      ))}

      <Title2 className="pets-title">Les Chèvres</Title2>
      {listPets.chevres.map((pet, index) => (
        <Pets
          key={pet.title}
          title={pet.title}
          img={pet.img}
          text={pet.text}
          isLeftSide={index % 2 === 0}
        />
      ))}

      <Title2 className="pets-title">Les Lapins</Title2>
      {listPets.lapins.map((pet, index) => (
        <Pets
          key={pet.title}
          img={pet.img}
          text={pet.text}
          isLeftSide={index % 2 === 0}
        />
      ))}

      <Title2 className="pets-title">Les Cochons d'inde</Title2>
      {listPets.cochonsDIndes.map((pet, index) => (
        <Pets
          key={pet.title}
          title={pet.title}
          img={pet.img}
          text={pet.text}
          isLeftSide={index % 2 === 0}
        />
      ))}

      <Title2 className="pets-title">Les Poules</Title2>
      {listPets.poules.map((pet, index) => (
        <Pets
          key={pet.title}
          title={pet.title}
          img={pet.img}
          text={pet.text}
          isLeftSide={index % 2 === 0}
        />
      ))}
    </QuiSommeNousContainer>
  );
}
