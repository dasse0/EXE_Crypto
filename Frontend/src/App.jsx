import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./router";


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <div className="App">
      <Routers/>
     </div>
    </Router>
   </>
  )
}

export default App
