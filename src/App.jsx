import React, { useState} from 'react'
import Home from '@pages/Home'
import Compiler from '@pages/Compiler'

function App() {
  const [auth, setAuth] = useState(true)
  const handleAuth = () => {
    setAuth(!auth)
  }

  return (
    <>
    {
      auth ?  <Compiler /> : <Home auth={handleAuth}/> 
    }
    </>
  )
}

export default App