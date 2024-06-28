
import './App.css'
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
        <div className='h-96 w-full'>
          <h6>pic</h6>
        </div>
      </div>
    </>
  )
}

export default App
