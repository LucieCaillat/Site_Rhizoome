import styled from "styled-components";
import colors from "../../utils/style/colors";
import motif from "../../assets/motif_animation.jpg";

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 30vh;
  object-fit: cover;
`;
export const Introduction = styled.section`
  width: 100%;
  padding: 50px 5% 80px;
  background-color: ${colors.green};
`;

export const AnimationContainer = styled.div`
  background-image: url(${motif});
  background-size: 110%;
  background-repeat: repeat;
  width: 100%;
`;
export const TypeAnimationContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  background-color: ${({ color }) => (color ? color : "")};
  & p {
    text-align: center;
  }
  & h2 {
    text-align: center;
    margin-bottom: 50px;
  }
`;
