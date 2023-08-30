import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import { Link } from "react-router-dom";

export default function RoundImageLink({ title, img, url, size }) {
  const minSize = size * 0.7 + "px";
  size = size + "px";
  const StyledLink = styled(Link)`
    position: relative;
    display: block;
    width: ${size};
    height: ${size};
    text-decoration: none;
    & img {
      width: ${size};
      height: ${size};
      border-radius: ${size};
      object-fit: cover;
    }
    & .on_hover {
      position: absolute;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${size};
      height: ${size};
      border-radius: ${size};
      text-align: center;
      color: ${colors.cream};
      font-weight: bold;
      font-size: ${fontSize.greenBtn};
      background-color: ${colors.roundImageLink};
      opacity: 0;
      transition: opacity 500ms;
    }
    &:hover .on_hover {
      opacity: 1;
    }
    @media screen and (max-width: 1450px) {
      width: ${minSize};
      height: ${minSize};
      & img {
        width: ${minSize};
        height: ${minSize};
      }
      & .on_hover {
        width: ${minSize};
        height: ${minSize};
      }
      @media screen and (max-width: 880px) {
        width: 65vw;
        height: 65vw;
        & img {
          width: 65vw;
          height: 65vw;
          border-radius: 65vw;
        }
        & .on_hover {
          width: 65vw;
          height: 65vw;
          border-radius: 65vw;
        }
      }
    }
  `;
  return (
    <StyledLink to={url}>
      <img src={img} alt={title} />
      <div className="on_hover"> {title}</div>
    </StyledLink>
  );
}
