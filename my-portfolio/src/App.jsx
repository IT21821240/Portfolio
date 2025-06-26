import './App.css'
import About from './components/About'
import Technology from './components/Technology'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import Projects from './components/Project'
import Service from './components/Service'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Technology />
        <Projects />
        <Footer />
    </div>
  )
}

export default App