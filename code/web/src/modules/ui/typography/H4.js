// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { primary, secondary } from '../common/fonts'

// Component
const H4 = (props) => {
    const { children, font, ...others } = props

    return(
        <h4 { ...others }>
            { children }

            {/* language=CSS */}
            <style jsx>{`
                h4 {
                    font-family: ${ font === 'primary' ? primary : secondary };
                    font-size:  1.75em;
                }
            `}</style>
        </h4>
    )
}

// Component Properties
H4.propTypes = {
    font: PropTypes.string
}
H4.defaultProps = {
    font: 'primary'
}

export default H4