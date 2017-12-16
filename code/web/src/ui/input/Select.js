// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import {grey2, grey4, black} from '../common/colors'

// Component
const Input = (props) => {
  const {children, fullWidth, ...other} = props

  return (
    <div>
      <select {...other}>{children}</select>

      {/* language=CSS */}
      <style jsx>{`
                select {
                    outline: none;
                    padding-top: 0.8em;
                    padding-bottom: 0.4em;
                    font-size: 1em;
                    border: none;
                    background-color: transparent;
                    color: ${ black };
                    border-bottom: 1px solid ${ grey2 };
                    width: ${ fullWidth ? '100%' : 'auto' };
                    -webkit-appearance: none;
                    border-radius: 0;
                }
                select:hover {
                    border-bottom: 1px solid ${ grey4 };
                }
                select:active {
                    border-bottom: 1px solid ${ grey4 };
                }
            `}
      </style>
    </div>
  )
}

// Component Properties
Input.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool
}
Input.defaultProps = {
  type: 'button',
  fullWidth: false
}

export default Input