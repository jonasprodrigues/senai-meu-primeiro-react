import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <h1>Cadastro de usuarios</h1>
      <p>Jonas</p>
      <p>Curso Desenvolvimento WEB - Start CO.DE</p>
      <div>
        <img src={heroImg} alt="Imagem de um herói" />
        <Saudacao />    
      </div>
      
    </div>
    
  )
}

function Saudacao() {
  return (
  <p>Bem-vindo ao React!</p>
  )
}

export default App
