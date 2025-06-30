import './App.css'
import { MdArrowOutward } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { BrowserRouter } from 'react-router-dom'

function Mantovano() {

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

          <a className='mid2' href="https://pay.kirvano.com/89fe5937-01cf-45f5-af56-6ce3294095ad?aff=05135e4a-631f-4a39-8521-8f718f2cdbbc">
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

          <a className='mid2' href="https://pay.kirvano.com/a85e30ca-bf8b-4cdd-9dcb-9cbbc4ab1c21?aff=9c88f715-6bc9-4547-a7c7-826998977396">
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

export default Mantovano