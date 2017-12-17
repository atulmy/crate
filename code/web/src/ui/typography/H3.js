// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import {primary, secondary} from '../common/fonts'

// Component
const H3 = (props) => {
  const {children, font, ...others} = props

  return (
    <h3 {...others}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
                h3 {
                    font-family: ${ font === 'primary' ? primary : secondary };
                    font-size: 2em;
                }
            `}</style>
    </h3>
  )
}

// Component Properties
H3.propTypes = {
  font: PropTypes.string
}
H3.defaultProps = {
  font: 'primary'
}

export default H3