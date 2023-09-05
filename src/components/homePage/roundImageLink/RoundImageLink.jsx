import { StyledLink } from "./RoundImageLinkStyle";

export default function RoundImageLink({ title, img, url, size }) {
  const minSize = size * 0.7 + "px";
  const normalSize = size + "px";

  return (
    <StyledLink to={url} size={normalSize} minsize={minSize}>
      <img src={img} alt={title} />
      <div className="on_hover"> {title}</div>
    </StyledLink>
  );
}
