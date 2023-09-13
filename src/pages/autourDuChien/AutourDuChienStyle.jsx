import styled from "styled-components";
import colors from "../../utils/style/colors";

export const AutourDuChienContainer = styled.div`
  & h2 {
    color: ${colors.cream};
    margin-bottom: 20px;
    text-align: center;
    & span {
      filter: brightness(5);
    }
  }
`;

export const TitleContainer = styled.section`
  background-color: ${colors.brown};
  color: ${colors.cream};
  padding: 50px 5% 80px;
  & p {
    margin-bottom: 20px;
  }
  & a {
    color: ${colors.cream};

    &:hover {
      text-decoration: none;
    }
  }
`;

export const PartContainer = styled.section`
  &#peccram {
    background-color: ${colors.lightBrown};
  }
  &#lac {
    background-color: ${colors.lightGrayBrown};
  }

  padding: 15vh 5% 80px;

  & p {
    margin-bottom: 20px;
  }
  & .program_for {
    margin-top: 50px;
  }
`;

export const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const TextImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  margin: 20px 0;
  & img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }
  & figcaption {
    color: ${colors.offWhite};
    text-align: center;
  }
  & p {
    width: 60%;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    & p {
      width: 100%;
    }
    & figure {
      width: 90%;
    }
  }
`;
