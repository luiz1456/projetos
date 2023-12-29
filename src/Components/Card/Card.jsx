import './styled.css'

const renderTecnologia = (tecnologia) => {
  switch (tecnologia) {
    case 'html':
      return (
        <img src="assets/html.png" alt="Html" title='Html' />
      )
    case 'css':
      return (
        <img src="assets/css.png" alt="css" title='Css' />
      )
    case 'javascript':
      return (
        <img src="assets/js.png" alt="javascript" title='JavaScript' />
      )
      case 'react':
        return (
          <img className='logo-react' src="assets/react.svg" alt="react" title='React' />
        )
  }
}

// const formatarDescricao = (descricao) => {
//   const descricaoFormatada = descricao.substring(0,87) +'...'
//   // if(descricaoFormatada.length > 100)
//   return(descricaoFormatada)
// }

export default function Card(props) {
  return (
    <div className='card'>
      <h1 className='nome-projeto'>{props.nome}</h1>
      <p className='descricao'>{props.descricao}</p>
      <img className='imagem-projeto' src={props.imagem} alt={props.nome} />
      <div className="tecnologias">

        {props.tecnologias.map((tecnologia,index) => {
          return (
            <div className='container-img-tecnologia' key={index}>
              {renderTecnologia(tecnologia)}
            </div>
          )
        })}

      </div>
      <div className="container-links-projeto">
        <a className='link-projeto' href={props.link} target='_blank'>ver projeto</a>
        <a className='link-repositorio' href="#" target='_blank'><img src="assets/github.png" alt="" /></a>
      </div>
    </div>
  )
}
