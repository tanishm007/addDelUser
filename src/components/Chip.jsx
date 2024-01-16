// Chip.js
import React from 'react';
import './Chip.css'


function Chip({ member, onRemove, svg }) {
  return (
    <div className='selected-item'>
      <span className='remove-item'

       onClick={onRemove}
      >{svg}{member.name}{<b>x</b>}</span>
      
    </div>
  );
}

export default Chip;
