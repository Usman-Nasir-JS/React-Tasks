import './App.css'
import FakeStore from './components/FakeStore'
import JokeGenerator from './components/JokeGenerator'


function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center py-5 mb-5 bg-blue-700 mask-b-from-neutral-700">Level 4 – Effects & Data Fetching</h1>

      <FakeStore />
    
      <JokeGenerator />
    </>
  )
}

export default App
