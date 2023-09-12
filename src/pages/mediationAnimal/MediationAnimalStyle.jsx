import styled from "styled-components";
import colors from "../../utils/style/colors";

export const MediationAnimalContainer = styled.div`
  background: linear-gradient(white, ${colors.offWhite});
  & p {
    color: ${colors.darkGray};
    &.center-text {
      width: 80%;
      margin: 50px auto;
    }
  }
  & h2 {
    margin: 50px 0;
    text-align: center;
    color: ${colors.lightBrown};
  }
`;

export const TitleContainer = styled.div`
  background-color: ${colors.darkBrown};
  color: ${colors.cream};
  padding: 20px;
  margin-bottom: 50px;
  & p {
    color: ${colors.cream};
    width: 40%;
    min-width: 650px;
    margin: auto;
  }
`;

export const TextImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  padding: 20px;
  & img {
    width: 30%;
    max-width: 416px;
    height: 30%;
    max-height: 440px;
    object-fit: cover;
  }
  & p {
    width: 50%;
    max-width: 564px;
  }
`;
