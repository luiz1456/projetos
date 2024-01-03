import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import ListaProjetos from './Dados/Dados'

function App() {
  const [listaFiltrada, setlistaFiltrada] = useState(ListaProjetos)
  const [botaoAtivo, setBotaoAtivo] = useState()


  const handleClick = (tecnologia) => {
    setBotaoAtivo(tecnologia)
    setlistaFiltrada(
      tecnologia ? ListaProjetos.filter((projeto) =>
        projeto.tecnologia.includes(tecnologia)) : ListaProjetos
    )
  }

  return (
    <main>
      <h1 className='titulo'>Meus projetos</h1>
      <section className="container-botoes">
        <button className={`botoes ${botaoAtivo === 'html' ? 'botao-ativo' : ''}`} onClick={() => handleClick('html')}>Html e CSS</button>
        <button className={`botoes ${botaoAtivo === 'javascript' ? 'botao-ativo' : ''}`} onClick={() => handleClick('javascript')}>JavaScript</button>
        <button className={`botoes ${botaoAtivo === 'react' ? 'botao-ativo' : ''}`} onClick={() => handleClick('react')}>React</button>
        <button className={`botoes ${!botaoAtivo ? 'botao-ativo' : ''}`} onClick={() => handleClick()}>Todos</button>
      </section>
      <section className="section-cards">
        <div className="container-cards">
          {listaFiltrada.map((projeto, index) => {
            return (
              <Card key={index}
                nome={projeto.nome}
                descricao={projeto.descricao}
                imagem={projeto.imagem}
                link={projeto.link}
                tecnologias={projeto.tecnologia}
                repositorio={projeto.repositorio}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App
