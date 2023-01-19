
function CardFoto(props) {


  return (
      <img className='foto__image' src={props.info.preview} alt={props.info.name}/>
  );
}

export default CardFoto;