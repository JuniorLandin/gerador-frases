import { useState } from 'react'
import './App.css'

import logo from './assets/logo.png'

function App() {

  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os bons e aprenda com eles',
        'Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.',
        'Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.',
        'Acorde todas as manhãs com um sorriso. Esta é mais uma oportunidade que você tem para ser feliz. Seja seu próprio motor de ignição. O dia de hoje jamais voltará .... Não o desperdice!!!',
        'Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!'
      ]
    },
    {
      id: 2,
      nome: 'Bom dia',
      frases: [
        'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo! ✌',
        'Escreva em seu coração: todo dia é o melhor dia do ano.',
        'Bom dia a todos! Está na hora de acordar, respirar fundo e aproveitar a beleza das pequenas coisas.'
      ]
    },
    {
      id: 3,
      nome: "Boa Noite",
      frases: [
        "Boa Noite, Baum?"
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>
      <img
       src={logo}
       alt='Logo Frases'
       />
      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button
           key={item.id}
           className='category-button'
           style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"
           }}
           onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}

      </section>

      <button
       className='button-frase'
       onClick={gerarFrase}
      >
        Gerar frase
      </button>

      {textoFrase && 
        <p className='text-frase'> 
          {textoFrase}    
        </p>
      }

    </div>
  )
}

export default App
