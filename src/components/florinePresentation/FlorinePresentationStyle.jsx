import styled from "styled-components";
import colors from "../../utils/style/colors";

export const FlorineBox = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  padding: 20px 30px;
  & .florin-box_left-part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 30px;
    width: 0vw;
    z-index: 100;
  }
  & article {
    width: 75vw;
    background-color: ${colors.lightBrown};
    padding: 20px;
    padding-left: 20vw;

    & h2 {
      color: ${colors.cream};
      margin-bottom: 20px;
    }
  }
`;

export const RoundImage = styled.img`
  width: 500px;
  border-radius: 250px;
`;

export const Cv = styled.aside`
  background-color: ${colors.green};
  width: 600px;
  padding: 10px;
  & p {
    padding: 10px;
    border: 2px ${colors.offWhite} dotted;
  }
  & li {
    margin: 20px;
  }
`;
