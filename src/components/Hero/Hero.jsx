import './Hero.css';
import videoBg from '../../assets/banner.mp4'; // ajuste o nome do arquivo

function Hero() {
  return (
    <div className="banner-container">
        <div className="banner-txt-area">
            <video
              className='video-background'
              src={videoBg}
              autoPlay
              loop
              muted
            />
            <h1 className='banner-title'>Britadores, Cones, Peineiras, <br/> Roletes e Transportadores</h1>
            <p className='banner-description'>
              Eleve o nível de sua Pedreira com a <span>Britamaq</span>! Oferecemos 
              <span> Equipamentos e peças</span> de todos os portes para uma ampla
              variedade de segmentos, proporcionando tecnologia de
              ponta, alta performance e um excelente custo-benefício.
            </p> 
            <div className="cta">
                <a href="#" className='btn-cta'>Saiba mais</a>
            </div>
        </div>
    </div>
  );
}

export default Hero;