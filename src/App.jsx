import React, { useState} from 'react'
import Home from '@pages/Home'
import Account from '@pages/Account'

function App() {
  const [auth, setAuth] = useState(false)
  const handleAuth = () => {
    setAuth(!auth)
  }

  return (
    <>
    {
      auth ?  <Account /> : <Home auth={handleAuth}/> 
    }
    </>
  )
}

export default App