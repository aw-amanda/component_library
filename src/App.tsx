import './index.css'
import { Navigation } from './Navigation/Navigation'
import { ButtonsPage } from './components/Buttons/ButtonsPage'
import { AnimationsPage } from './components/Animations/AnimationsPage'
import { CardsPage } from './components/Cards/CardsPage'
import { TextPage } from './components/Text/TextPage'

function App() {

  return (
    <div className="w-full min-h-screen p-4 bg-black">
      <Navigation />
      <ButtonsPage />
      <CardsPage />
      <AnimationsPage />
      <TextPage />
    </div>
  )
}

export default App
