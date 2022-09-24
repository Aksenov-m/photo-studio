import bazar from "../../images/Bazar.jpg";
import malvie from "../../images/Malvie.jpg";
import officiel from "../../images/Officiel.jpg";
import "./Foto.css";

function Foto(props) {
  

  return (
    <section className='foto section content__section'>
        <img className='foto__image' src={bazar} alt='Обложка журнала.' />
        <img className='foto__image' src={malvie} alt='Обложка журнала.' />
        <img className='foto__image' src={officiel} alt='Обложка журнала.' />
    </section>
  );
}

export default Foto;