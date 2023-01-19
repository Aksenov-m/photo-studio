import "./ButtonLink.css";

function Button(props) {

  return (
    <a className={`link ${props.Class}`} href={props.href} onClick={props.onClick} target={props.target}>
      {props.text} {props.children}
    </a>
  );
}

export default Button;
