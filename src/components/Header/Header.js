import React from 'react'
import "./header.css"
import Perfil from "../../assets/profilenobg.png"

export default function Header() {
  return (
      <header id='header'>
          {/* se puede agregar un inicio donde se ponga el nombre de quien ingresa y saludar "Hola {nombre} bienvenid@ a mi portfolio" */}
          <div className='titulos'>

            <h2>Hola! Soy Enzo Marchesi, bienvenid@ a mi portfolio</h2> 
            <h1>Front End Developer</h1>

          </div>
          {/* <div className='typed-container '>
            <div className='typed-out'>Escrito a mano</div>
          </div> */}
          <img className='perfil' src={Perfil} alt="Profile" />
      </header>
  )
}
