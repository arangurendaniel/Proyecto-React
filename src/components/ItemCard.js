import React from 'react';
import '../stylesheets/ItemCard.css';
import { Link } from 'react-router-dom';

function ItemCard( {articulo} ) {
  return (
    <div className='item-card'>
        <img src={articulo.imagen} alt={`${articulo.nombre}`} />
        <div className='item-info'>
            <p className='item-name'>{articulo.nombre}</p>
            <p className='item-price'>${articulo.precio}</p>
            <p className='categoria'>{articulo.categoria}</p>
            <Link className='mas-info item-add' to={`/producto/${articulo.id}`} >Ver más</Link>
        </div>
    </div>
  )
}

export default ItemCard

