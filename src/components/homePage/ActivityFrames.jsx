import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import GreenBtn from "./GreenBtn";

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background-color: white;
  margin-bottom: 30px;
  @media screen and (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
  }
`;

const Frame = styled.div`
  position: relative;
  top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-width: 300px;
  max-width: 500px;
  & p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 230px;
    padding-bottom: 40px;
    text-align: center;
    font-weight: bold;
    color: ${colors.darkGray};
    font-size: ${fontSize.activityFrames};
    margin: 0;
    background-color: ${colors.cream};
    & span {
      font-size: 27px;
    }
  }
  & button {
    position: relative;
    top: -25px;
  }
  @media screen and (max-width: 990px) {
    width: 70%;
    & p {
      height: 300px;
    }
  }
`;

export default function ActivityFrames() {
  return (
    <Div>
      <Frame>
        <p>
          Animation
          <br />
          nature
        </p>
        <GreenBtn url="/AnimationNature">DÉCOUVRIR</GreenBtn>
      </Frame>
      <Frame>
        <p>
          Autour
          <br />
          du chien <br />
          <span>PECCRAM & LAC</span>
        </p>
        <GreenBtn url="/AutourDuChien">DÉCOUVRIR</GreenBtn>
      </Frame>
      <Frame>
        <p>
          Médiation
          <br />
          par l'animal
        </p>
        <GreenBtn url="/MediationAnimal">DÉCOUVRIR</GreenBtn>
      </Frame>
    </Div>
  );
}
