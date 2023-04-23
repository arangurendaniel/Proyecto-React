import React from 'react';
import '../stylesheets/ItemListContainer.css'
import ItemCard from './ItemCard';

function ItemListContainer(props) {
  return (
    <div>
      <p style={{textAlign:'center', margin: '20px', fontSize: '2rem'}}>{props.greeting}</p>
      <div className='item-list-container'>
        <ItemCard 
          archivo="coffee first"
          nombre="Coffee First"
          precio="1600"
        />
        <ItemCard 
          archivo="frases"
          nombre="Frases"
          precio="1800"
        />
        <ItemCard 
          archivo="simpsons"
          nombre="Simpsons"
          precio="1400"
        />
        <ItemCard 
          archivo="frases 2"
          nombre="Frases 2"
          precio="1600"
        />
        <ItemCard 
          archivo="memes"
          nombre="Memes"
          precio="1800"
        />
        <ItemCard 
          archivo="stress"
          nombre="Stress"
          precio="1400"
        />
      </div>
    </div>
  )
}

export default ItemListContainer