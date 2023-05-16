import { Fragment, useEffect, useState } from 'react';
import data from '../data/data.json';
import '../stylesheets/VentanaProducto.css'
import { useParams } from 'react-router-dom';

const VentanaProducto = () => {

  const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
       const item = data.find((element) => element.id === id);

       if (item) {
        resolve(item)
       } else {
        reject({
          error: "No se encontró el producto"
        })
       }
    })
  }

  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    pedirItemPorId(Number(id))
      .then((resp) => {
        setItem(resp)
      })
  }, [id])
  


  return (
    <div className='ventana-producto'>
      {item && 
      <>
      <div className='contenedor-imagen-producto'>
        <img className='imagen-ventana-producto' src={item.imagen} alt={item.nombre} />
      </div>
      <div className='contenedor-detalle-producto'>
            <p className='categoria-detalle'>{item.categoria}</p>
            <p className='codigo-detalle'><span>Código:</span> {item.id}</p>
            <p className='detalle-nombre'>{item.nombre}</p>
            <p className='detalle-descripcion'>{item.descripcion}</p>
            <p className='precio-detalle'>${item.precio}</p>
            <button className='boton-agregar'>Agregar</button>
        </div> 
      </>
      }
    </div>
  )
}

export default VentanaProducto


{
  /*
        <div className='contenedor-imagen-producto'>
            <img className='imagen-ventana-producto' src={item.imagen} alt={item.nombre} />
        </div>
        <div className='contenedor-detalle-producto'>
            <p className='categoria-detalle'>{item.categoria}</p>
            <p className='codigo-detalle'><span>Código:</span> {item.id}</p>
            <p className='detalle-nombre'>{item.nombre}</p>
            <p className='detalle-descripcion'>{item.descripcion}</p>
            <p className='precio-detalle'>${item.precio}</p>
            <button className='boton-agregar'>Agregar</button>
        </div>
*/

}