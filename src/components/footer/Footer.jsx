import styled from "styled-components";
import colors from "../../utils/style/colors";
import fontSize from "../../utils/style/fontSize";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 250px;
  padding: 0px 5% 50px;
  background-color: ${colors.background.footer};
  color: ${colors.police.footer};
  font-size: ${fontSize.nav};
  font-weight: bold;
  & div {
    width: 33%;
  }
  & p {
    margin: 0;
    white-space: nowrap;
  }
  & #footer-contact {
    line-height: 1.6rem;
    & span {
      color: ${colors.police.cream};
    }
    & .link {
      color: ${colors.police.footer};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  & #footer-title {
    margin: 0;
    font-size: ${fontSize.title2};
    text-align: center;
    color: ${colors.police.cream};
    line-height: 3rem;
    & span {
      color: ${colors.background.green};
    }
  }
  & #footer-legal-mention {
    display: flex;
    justify-content: end;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <p id="footer-contact">
          <span>Florine Davie</span>
          <br />
          Tel : 06 70 14 23 84
          <br />
          Mail : rhizoomz95@gmail.com
          <br />
          Facebook :{" "}
          <Link className="link" to="#">
            rhizoome
          </Link>
        </p>
      </div>

      <p id="footer-title">
        <span>Rhizoome</span>
        <br />
        Animation nature
        <br />& Médiation animale
      </p>

      <div id="footer-legal-mention">
        <p>
          ©2023 <br />
          Mentions légales
        </p>
      </div>
    </StyledFooter>
  );
}