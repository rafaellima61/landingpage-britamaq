import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-txt">
        <h2>A Britamaq</h2>
        <p>
          Há 52 anos, nascia a Britamaq — uma empresa que se consolidou como
          referência no mercado de máquinas e equipamentos para construção e
          britagem. Desde o início, a Britamaq se compromete com a qualidade,
          inovação e atendimento personalizado, oferecendo não apenas produtos
          de alto desempenho, mas também consultoria técnica especializada para
          orientar seus clientes nas melhores soluções para cada desafio.
        </p>

        <p>
          {" "}
          À frente dessa trajetória de sucesso está{" "}
          <span className='name-destaque'>Roosevelt Fonseca</span>, fundador e principal especialista da
          empresa, reconhecido nacionalmente como uma das maiores autoridades em
          equipamentos de britagem e seus derivados. Com conhecimento técnico
          aprofundado e experiência prática acumulada ao longo de décadas, ele é
          uma referência no setor, sendo constantemente procurado por empresas
          que buscam excelência em suas operações.
        </p>

        <p>
          Com essa liderança visionária, a Britamaq segue como sinônimo de
          confiança, conhecimento e resultados sólidos para o mercado.
        </p>
      </div>
    </div>
  );
}

export default About;
