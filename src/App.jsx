
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/sections/About'
import ContactUs from './components/sections/ContactUs'
import Services from './components/sections/Services'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Landing/>
        <Services/>
        <About/>
        <ContactUs/>
        <Footer/>
      </div>
    </>
  )
}

export default App
