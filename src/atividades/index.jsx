import './styles.scss';
import './index.scss'
import Cabecalho from '../components/header/index'

export default function App() {

  let corPrimaria = '#EDF2F4'
  let corSegundaria = '#6F91E8'

  return (

    <div className="page-atividade">

      <Cabecalho />

      <Card
        corPrimaria={'#A3E5BA'}
        corSegundaria={'#EFFBE2'}
        titulo={'Componentes'}
        subtitulo={'Assuntos'}
        texto={`- Objetos e Listas de Objetos\n- Componentes`}
        data={'26/agosto'} />

      <Card
        corPrimaria={'#DCA3E5'}
        corSegundaria={'#EDE2FB'}
        titulo={'Renderização e Efeito'}
        subtitulo={'Assuntos'}
        texto={`- Componentes na renderização.`}
        data={'2/setembro'} />

      <Card
        corPrimaria={'#C3C3C3'}
        corSegundaria={'#F2F2F2'}
        titulo={'Consumindo APIs - Parte 1'}
        subtitulo={'Assuntos'}
        texto={`- Componentes na renderização.`}
        data={'9/setembro'} />

    </div>

  );
}

function Card({ corPrimaria, corSegundaria, titulo, subtitulo, texto, data }) {

  //   corPrimaria = '#A3E5BA'
  //   corSegundaria = '#EFFBE2'
  //   titulo = 'Componentes'
  //   subtitulo = 'Assuntos'
  //   texto = `- Objetos e Listas de Objetos
  // - Componentes`
  //   data = '>26/agosto'

  return (
    <div className='cards'>

      <div className='card' style={{ backgroundColor: corSegundaria }}>

        <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>

          <h2>{titulo}</h2>

        </div>

        <div className='card-conteudo'>

          <h3>{subtitulo}</h3>

          <pre>
            {texto}
          </pre>

        </div>

        <p className='tag'>{data}</p>

      </div>

    </div>
  )
}