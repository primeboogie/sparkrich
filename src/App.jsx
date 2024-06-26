import React, { useState} from 'react'
import Home from '@pages/Home'
import Compiler from '@pages/Compiler'

function App() {
  const [auth, setAuth] = useState(false)
  const handleAuth = () => {
    setAuth(pre => !pre)
  }

  return (
    <>
    {
      auth ?  <Compiler auth={handleAuth}/> : <Home auth={handleAuth}/> 
    }
    </>
  )
}

export default App