import './App.css'
import { MdArrowOutward } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function App() {

  return (
    <div className='main'>
      <p className='title'>Faça parte da <span className="glow">ostentação</span> <br/>do mercado digital.</p>

      <div className='card1'>

        <div className='maispopular'>
          Mais popular
        </div>

        <div className='maincontainer'>
          <div className='header'>
            <p>Com gerador de notificações</p>
            <p>Pagamento único para sempre.</p>
          </div>

          <div className='mid1'>
              <p>4x</p>
              <p className='price'>R$8,28</p>
              <div className='mid1info'>
                <p>ou <strong>R$29,90</strong> no PIX</p>
                <p>pagamento único</p>
              </div>
          </div>

          <a className='mid2' href="https://pay.kirvano.com/f35fbd4d-5c78-49b7-99ba-2ddaf04e8e9c">
            Comprar agora <MdArrowOutward/>
          </a>

          <div className='footer'>

            <div className='topic'>
              <p className='check'><FaCheck /></p><p>Seu acesso para sempre!</p>
            </div>

            <div className='topic'>
              <p className='check'><FaCheck /></p><p>Gerador de notificações</p>
            </div>

            <div className='topic'>
              <p className='check'><FaCheck /></p><p>Login garantido por toda a vida</p>
            </div>

            <div className='topic'>
              <p className='check'><FaCheck /></p><p>Atualizações gratuitas e contínuas</p>
            </div>

          </div>
        
        </div>

      </div>
      



      <div className='card1'>

        <div className='maincontainer2'>
          <div className='header'>
            <p>Sem gerador de notificações</p>
            <p>Pagamento único para sempre.</p>
          </div>

          <div className='mid1'>
              <p>4x</p>
              <p className='price'>R$6,62</p>
              <div className='mid1info'>
                <p>ou <strong>R$23,90</strong> no PIX</p>
                <p>pagamento único</p>
              </div>
          </div>

          <a className='mid2' href="https://pay.kirvano.com/4b76a39b-8c97-4878-b4c3-ce9dc3f669a9">
            Comprar agora <MdArrowOutward/>
          </a>

          <div className='footer'>

            <div className='topic'>
              <p className='check'><FaCheck /></p><p>Seu acesso para sempre!</p>
            </div>

            <div className='topic'>
              <p className='check'><FaCheck /></p><p>Login garantido por toda a vida</p>
            </div>

            <div className='topic'>
              <p className='check'><FaCheck /></p><p>Atualizações gratuitas e contínuas</p>
            </div>

          </div>
        
        </div>

      </div>

      <footer>
        Este aplicativo é apenas uma simulação para brincadeiras e fins cinematográficos. Não gera valores reais nem pode ser usado para transações verdadeiras ou falsas.
      </footer>
    </div>
  )
}

export default App
