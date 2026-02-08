import './App.css'
import SignupForm from './components/SignupForm'
import TodoApp from './components/TodoApp'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center py-5 mb-5 bg-blue-700 mask-b-from-neutral-700">Level 2 – Forms & State</h1>

      <div>

        <div>
          <SignupForm />
        </div>
        
        <div>
          <TodoApp />
        </div>
      
      </div>

    </>
  )
}

export default App
