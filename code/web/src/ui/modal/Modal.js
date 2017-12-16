// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
const Modal = (props) => {
  const {children, visible, ...other} = props

  return (
    <div {...other} style={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9,
      visibility: (visible ? 'visible' : 'hidden'),
      opacity: (visible ? 1 : 0),
      transition: 'opacity 0.25s ease-in-out'
    }}>
      <div style={{
        background: `url('/images/cover.jpg') top center`,
        backgroundSize: 'cover',
        position: 'fixed',
        top: '-40px',
        right: '-40px',
        bottom: '-40px',
        left: '-40px',
        zIndex: -1,
        filter: 'blur(25px)'
      }}/>

      {children}
    </div>
  )
}

// Component Properties
Modal.propTypes = {
  visible: PropTypes.bool.isRequired
}
Modal.defaultProps = {
  visible: false
}

export default Modal