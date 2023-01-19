import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel(props) {

  // const [offset, setOffset] = useState(-props.size);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = 0;
      if (offset === 0) {
        newOffset = -(props.size * (props.children.length -1));
        return newOffset;
      }
      // console.log(`leLef${newOffset}`);
      else {
        newOffset = +currentOffset + props.size;
        return Math.min(newOffset, 0);
      }
    
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = 0;
      const maxOffset = -(props.size * (props.children.length -1))
      if (offset === maxOffset) {
        newOffset = 0;
        return newOffset;
      }
      else {
      newOffset = +currentOffset - props.size;
      // console.log(`Right${newOffset}`);
      return Math.max(newOffset, maxOffset);
    }
    });
  };

  return (
    <>
      <button className='carousel__button prev' onClick={handleLeftArrowClick}></button>
      <button className='carousel__button next' onClick={handleRightArrowClick}></button>
      <div
        className='all-pages-container'
        style={{
          transform: `translateX(${offset}px)`,
        }}
      >
        {props.children}
      </div>
    </>
  );
}

export default Carousel;

