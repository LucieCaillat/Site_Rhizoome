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
  background-color: ${colors.darkBrown};
  color: ${colors.lightGrayBrown};
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
      color: ${colors.cream};
    }
  }
  & #footer-title {
    margin: 0;
    font-size: ${fontSize.title2};
    text-align: center;
    color: ${colors.cream};
    line-height: 3rem;
    & span {
      color: ${colors.green};
    }
  }
  & #footer-legal-mention {
    display: flex;
    justify-content: end;
  }
  & .link {
    color: ${colors.lightGrayBrown};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 1300px) {
    height: 200px;
    & #footer-title {
      display: none;
    }
    & #footer-legal-mention {
      font-size: ${fontSize.xxS};
    }
  }
  @media screen and (max-width: 460px) {
    height: 180px;
    font-size: ${fontSize.navS};
    padding-bottom: 40px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <p id="footer-contact">
          <span>Florine Davi</span>
          <br />
          Tel : 06 70 14 23 84
          <br />
          Mail : rhizoome95@gmail.com
          <br />
          Facebook :{" "}
          <Link
            className="link"
            to="https://www.facebook.com/profile.php?id=100085422852404"
          >
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
          <Link className="link" to="/MentionsLegales">
            Mentions légales
          </Link>
        </p>
      </div>
    </StyledFooter>
  );
}
