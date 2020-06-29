import React from 'react'
import { createPortal } from 'react-dom'
const FloatButton = ({ handleClick }) => (
  createPortal(
    <div className='container-float--button'>
      <button onClick={handleClick}>+</button>
    </div>,
    document.getElementById('floating-button')
  )
)
export default FloatButton;