import React from 'react';
import'./styles/card.css';

const Card = ({color,text}) => {

const borderColor = {
    borderColor:color,
}
const textColor = {
    color:color,
}



  return (
    <article style ={borderColor}className='card'>
        <h1 className='card_header'>Header</h1>
        <h2 className='card_title'>{text}Primary card title</h2>
        <p style ={textColor}className='card_text'>lorem ispem dolor sit amet consectetur adipisicing elit ?</p>
    </article>
  )
}

export default Card;
