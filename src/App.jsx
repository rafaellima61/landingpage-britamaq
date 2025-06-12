import About from './components/About/About'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Servicos from './components/Servicos/Servicos'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'

function App() {

  return (
   <>
      <Header />
      <Hero />
      <section id="servicos">
        <Servicos />
      </section>
      <section id="sobre">
        <About />
      </section>
      <section id="contato">
        <Form />
      </section>
      <Footer />
    </>
  )
}

export default App
