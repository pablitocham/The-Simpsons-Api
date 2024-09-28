
import './App.css'
import React, { useState } from 'react'
import Simpsons from './Img/Simpsons.png'
import Personajes from './Components/Personajes';

function App() {
  const [personajes, setPersonajes] = useState(null);

  const getCharacters = async () => {
    try {
      const apiCharacters = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=50');
      const jsonCharacters = await apiCharacters.json();

      let personajesMap = jsonCharacters.map(item => {
        return [item.character, item]
      });
      let personajesMapArr = new Map(personajesMap)
      let unPersonaje = [...personajesMapArr.values()]
      setPersonajes(unPersonaje)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='app'>
      <header className='header'>
        <h1 className='titulo'> The Simpsons</h1>
        {personajes ? (
          <Personajes personajes={personajes} setPersonajes={setPersonajes} />
        ) : (
          <>
            <img src={Simpsons} alt="" className='principal' />
            <button className='btn' onClick={getCharacters}> Frases de Personajes</button>
          </>
        )}
      </header>
    </div>
  )
}

export default App