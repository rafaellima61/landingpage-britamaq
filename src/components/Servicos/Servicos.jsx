import './Servicos.css';
import imgBritador from '../../assets/britagem.jpg';
import imgPlanta from '../../assets/plantas.jpg';
import imgRolos from '../../assets/rolos.jpg';
import imgCavaletes from '../../assets/cavaletes.jpg';

function Servicos() {
  return (
    <div className="servicos-container">
      <div className="servicos-content">
        <h3 className="servicos-title">Soluções em britagem</h3>
        <p className="servicos-description">
          Oferecemos uma ampla gama de serviços para atender às suas necessidades 
        </p>

        <div className="servicos-list"> 
          <div className='card'>
            <img src={imgBritador} alt="britagem britador" />
            <div className='orange'></div>
            <h4 className='card-title'>Britagem</h4>
            <p className='card-description'>
              Britadores de mandíbulas, cônicos e de impacto, 
              peneiras vibratórias e transportadores de correia.
            </p>
          </div>
          <div className='card'>
            <img src={imgPlanta} alt="planta de britagem" />
            <div className='orange'></div>
            <h4 className='card-title'>Plantas e Sistemas</h4>
            <p className='card-description'>
              Gestão da Construção, Plataformas Modulares, Plantas Portáteis
            </p>
          </div>
          <div className='card'>
            <img src={imgRolos} alt="Roletes SteelRool" />
            <div className='orange'></div>
            <h4 className='card-title'>Rolos SteelRool</h4>
            <p className='card-description'>
                Rolos, de carga com e sem revestimento de alta qualidade para sistemas de transporte,
                garantindo eficiência e durabilidade.
            </p>
          </div>
          <div className='card'>
            <img src={imgCavaletes} alt="Cavaletes SteelRool" />
            <div className='orange'></div>
            <h4 className='card-title'>Cavaletes</h4>
            <p className='card-description'>
                Cavaletes de alta resistência, projetados para suportar cargas pesadas e 
                garantir a estabilidade dos sistemas de transporte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicos;