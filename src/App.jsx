import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import './App.css'


function App() {

  return (
    <>
      <Header></Header>
      <main>
        <section>
          <div className='container'>
            {
              <HeroSection></HeroSection>
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default App
