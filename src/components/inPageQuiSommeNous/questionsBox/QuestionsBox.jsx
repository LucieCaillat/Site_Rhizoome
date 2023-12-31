import { QuestionsBoxContainer } from "./QuestionsBoxStyle";
import QuestionBox from "../../questionBox/QuestionBox";

export default function QuestionsBox() {
  return (
    <QuestionsBoxContainer>
      <QuestionBox question="Et pourquoi Rhizoome ?">
        Les Rhizomes sont les tiges souterraines, remplies de réserves
        alimentaires de certaines plantes vivaces. <br />
        Ils peuvent se ramifier considérablement et permettre ainsi la
        multiplication végétative de la plante. Séparés de leur plante
        d’origine, ils deviennent des propagules et de nouvelles plantes peuvent
        se former. <br /> <br /> C’est cette idée de réserve et de propagation
        (pour la connaissance) qui se cache derrière le nom de Rhizoome. <br />
        <br />
        Quand au double o, vous l’aviez compris, c’est pour zoo et le rapport
        avec l’animal.
      </QuestionBox>

      <QuestionBox question="Avez vous reconnu la plante du logo ?">
        La plante choisie pour le logo est le Sceau de Salomon, une plante
        vivace qui se disperse par ses rhizomes et qui est très commune dans les
        bois et lieux ombragés du Val d’Oise. <br />
        <br />
        Son nom vient de la forme des cicatrices laissées sur le rhizome par les
        tiges aériennes portant les fleurs, lesquelles ressemblent à l’anneau
        magique qui aurait donné ses pouvoirs au roi Salomon… <br />
        Mais on l’appelle aussi « muguet anguleux », « grenouillet », « signet
        », « herbe au panaris ». <br /> <br />
        Cette plante, bien que ses fleurs soient toxiques, a de nombreuses
        vertus médicinales.
      </QuestionBox>
    </QuestionsBoxContainer>
  );
}
