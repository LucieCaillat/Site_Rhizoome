import styled from "styled-components";
import colors from "../../utils/style/colors";

export const QuiSommeNousContainer = styled.div``;

export const FlorineBox = styled.section`
  display: flex;
  gap: 30px;
  padding: 20px 30px;
  background-color: ${colors.lightBrown};
  & .florin-box_left-part {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  & article {
    & h3 {
      color: ${colors.darkGray};
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
  padding: 20px;
  border: 10px ${colors.cream} solid;
  & li {
    margin: 20px;
  }
`;
