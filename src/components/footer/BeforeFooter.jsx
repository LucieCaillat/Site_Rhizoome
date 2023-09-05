import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import logo from "../../assets/logo.png";
import GreenBtn from "../greenBtn/GreenBtn";

const StyledBeforeFooter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${colors.offWhite};
  padding: 200px 0 70px;
  & img {
    width: 90vw;
    max-width: 770px;
  }
  & p {
    font-size: ${fontSize.title2};
    margin: 10px 0 30px;
    font-weight: bold;
    color: ${colors.darkBrown};
    text-align: center;
  }
  @media screen and (max-width: 880px) {
    padding-top: 100px;
    & p {
      width: 90vw;
      font-size: ${fontSize.activityBox};
    }
  }
`;

export default function BeforeFooter() {
  return (
    <StyledBeforeFooter>
      <img src={logo} alt="Rhieoome"></img>
      <p>Animation nature & Médiation animale</p>
      <GreenBtn url="/Contact">CONTACTEZ-MOI</GreenBtn>
    </StyledBeforeFooter>
  );
}
