import React from 'react'
import Intro from './Music/Intro.mp3'
function Personajes(props) {
    const { personajes, setPersonajes } = props
    const resetPersonajes = () => {
        setPersonajes(null)
    }
    return (
        <div className='personaje'>
            <div className='contenedor-personajes'>
                {personajes.map((personajes, index) => (
                    <div className='personaje-detalle' key={index}>
                        <h3> {personajes.character}</h3>
                        <img src={personajes.image} alt={personajes.characters} className='img' />
                        <p>{personajes.quote}</p>
                    </div>
                ))}
            </div>
            <button className='btn2' onClick={resetPersonajes}>
                <span className='volver'>Volver</span>
            </button>
            <audio autoPlay loop>
                <source src={Intro} autoPlay loop type='audio/mp3' />
            </audio>
        </div>
    )
}
export default Personajes
