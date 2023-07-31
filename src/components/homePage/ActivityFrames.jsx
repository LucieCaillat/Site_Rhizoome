import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import GreenBtn from "./GreenBtn";

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background-color: white;
  margin-bottom: 80px;
`;

const Frame = styled.div`
  position: relative;
  top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 200px;
  background-color: ${colors.background.cream};
  & p {
    text-align: center;
    position: relative;
    bottom: 30px;
    color: ${colors.police.nav};
    font-size: ${fontSize.activityFrames};
    margin: 0;
    & span {
      font-size: ${fontSize.bodyText};
    }
  }
  & button {
    position: relative;
    top: 180px;
  }
`;

export default function ActivityFrames() {
  return (
    <Div>
      <Frame>
        <GreenBtn url="/AnimationNature">DÉCOUVRIR</GreenBtn>
        <p>
          Animation
          <br />
          nature
        </p>
      </Frame>
      <Frame>
        <GreenBtn url="/AutourDuChien">DÉCOUVRIR</GreenBtn>
        <p>
          Autour
          <br />
          du chien <br />
          <span>PECCRAM & LAC</span>
        </p>
      </Frame>
      <Frame>
        <GreenBtn url="/MediationAnimal">DÉCOUVRIR</GreenBtn>
        <p>
          Médiation
          <br />
          par l'animal
        </p>
      </Frame>
    </Div>
  );
}
