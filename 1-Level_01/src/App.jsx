import './App.css'
import Counter from './components/Counter'
import StudentCard from './components/StudentCard'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center py-5 mb-5 bg-blue-700 mask-b-from-neutral-500">Level 1 – React Fundamentals</h1>

      <div>

        <div>
          <StudentCard />
        </div>
        
        <div>
          <Counter />
        </div>
      
      </div>

    </>
  )
}

export default App
