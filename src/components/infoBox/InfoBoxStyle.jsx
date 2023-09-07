import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";

export const InfoBoxContainer = styled.aside`
  position: relative;
  display: block;
  width: 33%;
  max-width: 700px;
  height: 300px;
  cursor: pointer;
  & .icon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${fontSize.title};
    color: ${colors.offWhite};
    background-color: ${colors.green};
    z-index: 0;
  }
  & .info {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.infoBox};
    font-size: ${fontSize.smallBodyTextM};
    text-align: center;
    color: ${colors.darkBrown};
    opacity: ${({ open }) => (open === "yes" ? "1" : "0")};
    transition: opacity 1000ms;
    transition-delay: 300ms;
    & ul {
      padding: 20px;
    }
    & li {
      margin: 20px 0;
      list-style-type: none;
    }
  }
  &:hover .info {
    opacity: 1;
    transition: opacity 600ms;
  }
`;
