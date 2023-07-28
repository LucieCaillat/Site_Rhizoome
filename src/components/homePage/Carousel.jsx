import styled from "styled-components";
import { useState, useEffect } from "react";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";

const Div = styled.div`
  height: 85vh;
  width: 100%;
  position: relative;
`;

export default function Carousel() {
  const [images, setImages] = useState([carousel1, carousel2, carousel3]);

  const Img = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    &.transition {
      opacity: 0;
      animation-name: anim;
      animation-duration: 2s;
      animation-delay: 5s;

      @keyframes anim {
        0% {
          opacity: 0;
        }
        90% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
    }
  `;

  useEffect(() => {
    setTimeout(() => {
      const next = [...images];
      next.push(next[0]);
      next.shift();
      setImages(next);
    }, 6900);
  }, [images]);
  return (
    <Div>
      <Img src={images[0]} />
      <Img className="transition" src={images[1]} />
    </Div>
  );
}
