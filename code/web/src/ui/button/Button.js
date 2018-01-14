// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { white, grey2, black } from '../common/colors'
import { primary, secondary } from '../common/gradients'
import { level1, level2, level3, level4 } from '../common/shadows'

// Component
const Button = (props) => {
  const { children, type, disabled, theme, ...other } = props

  return (
    <button type={type} disabled={disabled} {...other}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        button {
          padding: 0.8em 1.8em;
          border: none;
          border-radius: 1.4em;
          text-transform: uppercase;
          font-family: 'Roboto', sans-serif;
          cursor: pointer;
          outline: none;
          font-size: 1em;
          color: ${ theme !== 'none' ? white : black };
          box-shadow: ${ theme !== 'none' ? level2 : 'none' };
          background-color: transparent;
          background-image: ${ theme === 'primary' ? primary : theme === 'secondary' ? secondary : 'none' };
        }
        button:hover {
          box-shadow: ${ level3 };
        }
        button:active {
          box-shadow: ${ level4 };
        }
        button:disabled {
          color: ${ white };
          box-shadow: ${ level1 };
          background-color: ${ grey2 };
          background-image: none;
        }
      `}
      </style>
    </button>
  )
}

// Component Properties
Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
}
Button.defaultProps = {
  type: 'button',
  disabled: false,
  theme: 'none'
}

export default Button