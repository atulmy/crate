// Imports
import React  from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { white, black } from '../common/colors'
import { primary, secondary } from '../common/gradients'
import { level2, level3, level4 } from '../common/shadows'

// Component
const Button = (props) => {
    const { children, type, theme, ...other } = props

    return(
        <button type={ type } { ...other }>
            { children }

            {/* language=CSS */}
            <style jsx>{`
                button {
                    padding: 0.8em 1.5em;
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
            `}
            </style>
        </button>
    )
}

// Component Properties
Button.propTypes = {
    type: PropTypes.string,
    theme: PropTypes.string
}
Button.defaultProps = {
    type: 'button',
    theme: 'none'
}

export default Button