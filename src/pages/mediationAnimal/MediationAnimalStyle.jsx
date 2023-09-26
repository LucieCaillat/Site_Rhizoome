import styled from "styled-components";
import colors from "../../utils/style/colors";

export const MediationAnimalContainer = styled.div`
  background: linear-gradient(white, ${colors.offWhite});
  & p {
    color: ${colors.darkGray};
    &.center-text {
      margin: 50px auto;
      @media screen and (max-width: 600px) {
        margin: 20px auto;
      }
    }
  }
  & h2 {
    margin: 50px 0;
    text-align: center;
    color: ${colors.lightBrown};
  }
  & .conlusion {
    text-align: center;
    color: ${colors.orange};
    margin-top: 20px;
  }
  & a {
    color: ${colors.darkGray};
    &:hover {
      color: ${colors.darkBrown};
    }
  }
`;

export const TitleContainer = styled.div`
  background-color: ${colors.darkBrown};
  color: ${colors.cream};
  padding: 20px;
  & p {
    color: ${colors.cream};
    width: 40%;
    min-width: 650px;
    margin: auto;
    @media screen and (max-width: 680px) {
      width: 95%;
      min-width: auto;
    }
  }
`;
export const TextContainer = styled.section`
  padding: 50px 10% 0;
  @media screen and (max-width: 600px) {
    padding: 20px 5% 0;
  }
`;

export const TextImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  padding: 20px 0;
  & img {
    width: 30%;
    max-width: 416px;
    min-width: 220px;
    height: 30%;
    max-height: 440px;
    object-fit: cover;
  }
  & p {
    width: 60%;
    max-width: 800px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 20px;
    & p {
      width: 100%;
    }
  }
`;
export const Insert = styled.div`
  margin-top: 60px;
  background-color: ${colors.cream};
`;
