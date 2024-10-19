import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import RecipeSection from './components/RecipeSection/RecipeSection'
import './App.css'
import './Responsive.css'



function App() {

  return (
    <>
      <Header></Header>
      <main>
        <section>
          <div className='section-gap'>
            <div className='container'>
              {
                <HeroSection></HeroSection>
              }
            </div>
          </div>
        </section>

        <section>
          <div className='section-gap'>
            <div className='container'>
              {
                <RecipeSection></RecipeSection>
              }
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
