import styled from "styled-components";
import colors from "../../../utils/style/colors";

export const FlorineBox = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin: 20px 1% 20px 4%;
  & .florin-box_ghost-part {
    min-width: 250px;
  }
  & .florin-box_side-part {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    gap: 20px;
    width: 0px;
    z-index: 1;
    background-color: blue;
  }
  & article {
    width: 100%;
    background-color: ${colors.lightBrown};
    padding: 30px;
    padding-right: 320px;

    & h2 {
      color: ${colors.cream};
      margin-bottom: 20px;
    }
    & p,
    li {
      margin-bottom: 20px;
    }
  }

  /*Tablet style */
  @media screen and (max-width: 1500px) and (min-width: 901px) {
    & .florin-box_ghost-part {
      min-width: 200px;
    }
    & .florin-box_side-part {
      justify-content: flex-start;
      gap: 25px;
    }
    & article {
      padding-right: 30px;
      & p,
      li {
        margin-right: 210px;
      }
      & .overflow {
        margin-right: 0px;
      }
    }
  }

  @media screen and (max-width: 1237px) and (min-width: 901px) {
    & .overflow-2 {
      margin-right: 0px;
    }
  }
  /*Phone style */
  @media screen and (max-width: 900px) {
    margin: 20px 3% 0;
    & .florin-box_side-part,
    .florin-box_ghost-part {
      display: none;
    }
    & article {
      padding-right: 30px;
      padding-bottom: 150px;
    }
  }
`;

export const RoundImage = styled.img`
  width: 500px;
  border-radius: 250px;
  @media screen and (max-width: 1500px) {
    width: 300px;
  }
`;
