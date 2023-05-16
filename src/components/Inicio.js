import { useEffect, useState } from 'react'
import '../stylesheets/Inicio.css'

const Inicio = () => {

    const [randomNumber, setRandomNumber] = useState(0);

    const chooseNumber = () => {
        const number = Math.floor(Math.random() * 100);
        setRandomNumber(number);
    }

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        chooseNumber();
    }, [])
    

    useEffect(() => {
        if (randomNumber !== 0) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                setPokemon(data)
            })
        } else {
            console.log('Holis')
        }        

    }, [randomNumber])

    return (
    <div className='pagina-nosotros'>
        <h2>La tienda mas grande de funkos, tazas y vasos de cultura pop </h2>
        <img className='funkos-banner' src={require('../imagenes/banner-funkos.jpg')} alt="Banner de funkos" />
        {pokemon && 
        <div className='pokemones'>
            <img src={pokemon.sprites.front_default}/>
            <div className="datos-pokemon" >
                <h2>{pokemon.name.toUpperCase()}</h2>
                <p className="frase-del-dia" >¡Compráte algo de la tienda!</p>
            </div>
        </div> 
        }
    </div>
  )
}

export default Inicio