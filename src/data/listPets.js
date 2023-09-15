import poule from "../assets/les_poules.jpg";
import chien from "../assets/les_chiens.jpg";
import chevre from "../assets/les_chevres.jpg";
import cochonsDInde from "../assets/les_cochons_d_inde.jpg";
import lapin from "../assets/les_lapins.jpg";

const listPets = {
  chiens: [
    {
      img: chien,
      title: "PIRATE",
      text: `Pirate est un berger des shetland né le 1er décembre 2019. Un peu timide au premier abord, Pirate a besoin d’être rassuré et en confiance. J'aime le comparer au renard du Petit Prince qui nous donne une belle leçon de vie sur l'apprivoisement. En effet si vous parvenez à faire preuve de patience, Pirate deviendra votre ami et vous verrez que c'est un chien plein d'amour et d'affection. Il est prêt à tout pour nous satisfaire et est ainsi très obéissant, connaît de nombreux tours et a un côté "premier de la classe" quand il est de sortie avec d'autres chiens! Il est aussi très joueur et il saura vous solliciter pour de longues parties de lancer de balle ou de bâton ! Sa présence sera très intéressante pour apprendre à prendre son temps dans la relation et valoriser la capacité à entrer en lien. `,
    },
    {
      img: chien,
      title: "TOPAZE",
      text: "Topaze est une berger des Shetland né le 5 mars 2022. Pas un brin timide elle est prête à tout pour avoir des caresses et voler la vedette à Pirate. C'est une chienne très joueuse et très volontaire, elle ne résistera pas devant un jouet lancé ou des récompenses à retrouver. ",
    },
  ],
  chevres: [
    {
      img: chevre,
      title: "FREYJA",
      text: "Freyja est né le 3 mars 2021. Ayant perdu sa mère alors qu'elle n'avait que quelques jours, elle a décidé de nous adopter et s'est mise à nous suivre partout! Chèvre-chien donc, elle est vite devenue très complice avec Pirate! Affectueuse mais avec un caractère bien trempé, elle a le truc pour donner le sourire aux gens.",
    },
    {
      img: chevre,
      title: "JEANNETTE",
      text: "Une chèvre d’une grande douceur, malgré son passé difficile. Elle est vite devenue très amie avec Freyja ! ",
    },
  ],
  poules: [
    {
      img: poule,
      title: "HOUPETTE",
      text: "Avouez qu’elle a une coupe d’enfer, non ? Laissez là se percher sur vous, elle adore ça, et en plus vous aurez la classe !",
    },
    {
      img: poule,
      title: "SUZETTE",
      text: "Pour du maïs, elle ferait n’importe quoi !",
    },
  ],
  lapins: [
    {
      img: lapin,
      title: "BLOUF",
      text: "Un lapin papi en or né en 2011 ! Malgré son âge avancé, Blouf est toujours ravi de participer aux séances pour pouvoir se faire câliner !",
    },
    {
      img: lapin,
      title: "MARBRE",
      text: "Marbré est un adorable lapin nain Rex né le mars 2022, chez une collègue intervenante en médiation animale. Habitué à partir en séance depuis sa naissance, il a un succès fou avec son pelage tout doux!",
    },
  ],
  cochonsDIndes: [
    {
      img: cochonsDInde,
      title: "TEDDY",
      text: "Teddy est un cochon d’inde de race Teddy (original!). Ce qu’il préfère c’est les carottes, les carottes et les grattouilles sous le menton!",
    },
    {
      img: cochonsDInde,
      title: "PANDA",
      text: "Un pelage tout doux, une couleur originale, des pouic pouic de contentement lorsqu’on le caresse… Panda est un cochon d’inde qui a tout pour plaire !",
    },
  ],
};

export default listPets;
