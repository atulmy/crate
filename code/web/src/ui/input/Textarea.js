// Imports
import React  from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { primary, secondary } from '../common/gradients'
import { level2, level3, level4 } from '../common/shadows'
import { grey3, grey4, black } from '../common/colors'

// Component
const Textarea = (props) => {
    const { children, fullWidth, ...other } = props

    return(
        <span>
            <textarea { ...other }>{ children }</textarea>

            {/* language=CSS */}
            <style jsx>{`
                textarea {
                    outline: none;
                    color: ${ black };
                    padding-top: 0.8em;
                    padding-bottom: 0.4em;
                    font-size: 1em;
                    border: none;
                    background-color: transparent;
                    border-bottom: 1px solid ${ grey3 };
                    width: ${ fullWidth ? '100%' : 'auto' };
                }
                textarea:hover {
                    border-bottom: 1px solid ${ grey4 };
                }
                textarea:active {
                    border-bottom: 1px solid ${ grey4 };
                }
            `}
            </style>
        </span>
    )
}

// Component Properties
Textarea.propTypes = {
    fullWidth: PropTypes.bool
}
Textarea.defaultProps = {
    fullWidth: false
}

export default Textarea