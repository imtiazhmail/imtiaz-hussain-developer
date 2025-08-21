import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsCarousel from './components/ProjectsCarousel'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Header />
      <Hero />  
      <Skills /> 
      <ProjectsCarousel />
      {/* Some issue with ProjectsCarousel components but most is hero  */}
      <About />
      <Contact />
      <Footer />
    </>

  )
}

export default App
