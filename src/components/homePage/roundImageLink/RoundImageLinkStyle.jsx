import styled from "styled-components";
import colors from "../../../utils/style/colors";
import fontSize from "../../../utils/style/fontSize";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  width: ${({ size }) => (size ? size : "")};
  height: ${({ size }) => (size ? size : "")};
  text-decoration: none;
  & img {
    width: ${({ size }) => (size ? size : "")};
    height: ${({ size }) => (size ? size : "")};
    border-radius: ${({ size }) => (size ? size : "")};
    object-fit: cover;
  }
  & .on_hover {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ size }) => (size ? size : "")};
    height: ${({ size }) => (size ? size : "")};
    border-radius: ${({ size }) => (size ? size : "")};
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
    width: ${({ minsize }) => (minsize ? minsize : "")};
    height: ${({ minsize }) => (minsize ? minsize : "")};
    & img {
      width: ${({ minsize }) => (minsize ? minsize : "")};
      height: ${({ minsize }) => (minsize ? minsize : "")};
    }
    & .on_hover {
      width: ${({ minsize }) => (minsize ? minsize : "")};
      height: ${({ minsize }) => (minsize ? minsize : "")};
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
