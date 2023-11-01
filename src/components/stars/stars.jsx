import React from 'react';

import './css/stars.css';
import Star from '../star/star';


export default function Stars(props) {

  const { count } = props;
  
  const arr = [];
  
  let checkNum = typeof(count) === 'number';
  let totalCheck = checkNum && count <= 5 && count >= 1;


  if(totalCheck) {
    for(let i = 0; i < count; i += 1) {
      arr.push(i + '_star');
    }

    return (
      <ul className='card-body-stars'>
        {arr.map( el => <Star key={el}/>)}
      </ul>
    )
  }
  
}
