import React from 'react';
import '../stylesheets/ItemCard.css';

function ItemCard(props) {
  return (
    <div className='item-card'>
        <img src={require(`../imagenes/${props.archivo}.png`)} alt={`${props.archivo}`} />
        <div className='item-info'>
            <p className='item-name'>{props.nombre}</p>
            <p className='item-price'>${props.precio}</p>
            <button className='item-add'>Añadir</button>
        </div>
    </div>
  )
}

export default ItemCard