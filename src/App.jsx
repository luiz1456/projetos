import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import ListaProjetos from './Dados/Dados'

function App() {
  let [listaFiltrada, setlistaFiltrada] = useState(ListaProjetos)

  const handleClick = (tecnologia) => {

    setlistaFiltrada(
      tecnologia ? ListaProjetos.filter((projeto) =>
      projeto.tecnologia.includes(tecnologia)) : ListaProjetos
      )
  }

  return (
    <main>
      <h1>Meus projetos</h1>
      <div className="container-buttons">
        <button onClick={() => handleClick('html')}>Html e CSS</button>
        <button onClick={() => handleClick('javascript')}>JavaScript</button>
        <button onClick={() => handleClick('react')}>React</button>
        <button onClick={() => handleClick()}>Todos</button>
      </div>
      <div className="container-cards">
        {listaFiltrada.map((projeto, index) => {
          return (
            <Card key={index}
              nome={projeto.nome}
              descricao={projeto.descricao}
              imagem={projeto.imagem}
              link={projeto.link}
              tecnologias={projeto.tecnologia}
            />
          )
        })}
      </div>
    </main>
  )
}

export default App
