import { animateScroll as scroll } from "react-scroll";
import "./ButtonLink.css";


function ButtonLink(props) {

const scrollToTop = () => {
    scroll.scrollTo("app", {
      smooth: false,
      duration: 0,
      delay: 0,
    }); 
};

  return (
    <a className={`link ${props.Class}`} href={props.href} onClick={scrollToTop} target={props.target}>
      {props.text} {props.children}
    </a>
  );
}

export default ButtonLink;
