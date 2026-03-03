import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center py-5 mb-5 bg-blue-700 mask-b-from-neutral-700">Level 5 – SPA & Routing</h1>

      <nav>
        
        <h3 className='text-2xl text-center py-10'>↬ There has a buttons click & move on the next Page</h3>

        <div className='flex justify-around'>

          <Link to="/home" className="bg-black text-white px-4 py-1 rounded-full hover:bg-blue-500 transition-all duration-500">Home</Link>
          
          <Link to="/about" className="bg-black text-white px-4 py-1 rounded-full hover:bg-blue-500 transition-all duration-500">About</Link>
          
          <Link to="/projects" className="bg-black text-white px-4 py-1 rounded-full hover:bg-blue-500 transition-all duration-500">Projects</Link>
          
          <Link to="/contact" className="bg-black text-white px-4 py-1 rounded-full hover:bg-blue-500 transition-all duration-500">Contact</Link>
        
        </div>

      </nav>
      
    </>
  )
  
}

export default App
