
// import { Route, Outlet } from 'react-router-dom';
function FotoPortfolio(props) {
  

  return (
    <>
      <img className='foto__image' src={props.info.preview} alt={props.info.name || "фото"} />
      </>
      
  );
}

export default FotoPortfolio;