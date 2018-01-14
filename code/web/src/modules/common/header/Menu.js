// Imports
import React from 'react'
import { Link } from 'react-router-dom'

// Component
const Menu = (props) => {
  const { children, ...others } = props

  return (
    <div {...others}>
      {children}
    </div>
  )
}

export default Menu