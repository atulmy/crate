// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import {primary, secondary} from '../common/fonts'

// Component
const H6 = (props) => {
  const {children, font, ...others} = props

  return (
    <h6 {...others}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
                h6 {
                    font-family: ${ font === 'primary' ? primary : secondary };
                    font-size: 1.25em;
                }
            `}</style>
    </h6>
  )
}

// Component Properties
H6.propTypes = {
  font: PropTypes.string
}
H6.defaultProps = {
  font: 'primary'
}

export default H6