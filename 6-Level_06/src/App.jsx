import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      
      <div style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "20px"
      }}>
        
        <h1 className="text-3xl font-bold underline text-center py-5 mb-5 bg-blue-700 mask-b-from-neutral-700">Level 6 – State Management</h1>


        <h1 className='pt-5'>✤ Theme Condition: {theme.toUpperCase()} THEME</h1>

        <button className='border rounded-full m-1 mt-5 p-1 px-3' onClick={toggleTheme}>Change Theme</button>
    
      </div>
    
    </>
  )

}

export default App
