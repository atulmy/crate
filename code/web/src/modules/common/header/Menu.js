// Imports
import React from 'react'

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
