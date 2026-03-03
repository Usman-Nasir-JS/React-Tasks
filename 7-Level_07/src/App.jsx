import './App.css'
import MuiCard from './styles/MuiCard'
import TailwindCard from './styles/TailwindCard'
import StyledCard from './styles/StyledCard'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center py-5 mb-5 bg-blue-700 mask-b-from-neutral-700">Level 7 – Styling</h1>

      <TailwindCard />

      <MuiCard />
      
      <StyledCard />
    </>
  )
}

export default App
