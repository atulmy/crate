// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import {grey2, grey4, black} from '../common/colors'

// Component
const Input = (props) => {
  const {type, fullWidth, ...other} = props

  return (
    <div>
      <input type={type} {...other} />

      {/* language=CSS */}
      <style jsx>{`
                input {
                    outline: none;
                    padding-top: 0.8em;
                    padding-bottom: 0.4em;
                    font-size: 1em;
                    border: none;
                    background-color: transparent;
                    color: ${ black };
                    border-bottom: 1px solid ${ grey2 };
                    width: ${ fullWidth ? '100%' : 'auto' };
                }
                input:hover {
                    border-bottom: 1px solid ${ grey4 };
                }
                input:active {
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