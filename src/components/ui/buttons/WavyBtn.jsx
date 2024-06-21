import React from 'react'
import stytes from '@css/buttons/wavybtn.module.css'

function WavyBtn({ children }) {
  return (
    <a className={stytes.codepenButton}><span>{children}</span></a>
  )
}

export default WavyBtn