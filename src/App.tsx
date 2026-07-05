import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <Hero />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
