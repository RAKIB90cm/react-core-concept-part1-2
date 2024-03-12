import FatchingData from './All/Fetch'
import HookPrac from './All/Hook'
import Rexap from './All/RecapFatching'
import TodoReacp from './All/nw5'
import './App.css'
import Data from './Data'

function App(num) {

  return (
    <>
      <h3>Module 39 Practice React</h3>
      <TodoReacp></TodoReacp>
      {/* <Rexap></Rexap> */}
      {/* <FatchingData></FatchingData> */}
      <HookPrac></HookPrac>
      <Data></Data>
      <button>Click Me</button>
    </>
  )
}

export default App
