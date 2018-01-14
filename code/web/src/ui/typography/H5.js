// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { primary, secondary } from '../common/fonts'

// Component
const H5 = (props) => {
  const { children, font, ...others } = props

  return (
    <h5 {...others}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        h5 {
          font-family: ${ font === 'primary' ? primary : secondary };
          font-size: 1.5em;
        }
      `}</style>
    </h5>
  )
}

// Component Properties
H5.propTypes = {
  font: PropTypes.string
}
H5.defaultProps = {
  font: 'primary'
}

export default H5