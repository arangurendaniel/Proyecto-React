import { useState, useEffect } from 'react';
import '../stylesheets/ItemListContainer.css'
import ItemCard from './ItemCard';
import data from '../data/data.json';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

  const [articulos, setArticulos] = useState([]);
  const categoria = useParams().categoria
  console.log(categoria); 

  const llamarArticulos = () => {
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  };

  useEffect(() => {
    llamarArticulos()
    .then((resp) => {
      if (categoria) {
        setArticulos( resp.filter(art => art.categoria === categoria ) )
      } else {
        setArticulos(resp)
      }
    })
    }, [categoria])
  
  return (
    <div className='item-list-container'>
      {
        articulos && articulos.map(articulo => ( <ItemCard key={articulo.id} articulo={articulo} />  ))
      }
    </div>
  )
}

export default ItemListContainer