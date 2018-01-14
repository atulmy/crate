// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { primary, secondary } from '../common/fonts'

// Component
const H1 = (props) => {
  const { children, font, ...others } = props

  return (
    <h1 {...others}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        h1 {
          font-family: ${ font === 'primary' ? primary : secondary };
          font-size: 4em;
        }
      `}</style>
    </h1>
  )
}

// Component Properties
H1.propTypes = {
  font: PropTypes.string
}
H1.defaultProps = {
  font: 'primary'
}

export default H1