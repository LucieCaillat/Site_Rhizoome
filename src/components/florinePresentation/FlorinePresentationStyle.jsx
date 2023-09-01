import styled from "styled-components";
import colors from "../../utils/style/colors";

export const FlorineBox = styled.section`
  display: flex;
  gap: 30px;
  padding: 20px 30px;
  background-color: ${colors.lightBrown};
  margin: 0 20px;
  & .florin-box_left-part {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  & article {
    & h2 {
      color: ${colors.offWhite};
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
