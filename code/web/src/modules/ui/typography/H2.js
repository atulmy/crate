// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { primary, secondary } from '../common/fonts'

// Component
const H2 = (props) => {
    const { children, font, ...others } = props

    return(
        <h2 { ...others }>
            { children }

            {/* language=CSS */}
            <style jsx>{`
                h2 {
                    font-family: ${ font === 'primary' ? primary : secondary };
                    font-size: 3em;
                }
            `}</style>
        </h2>
    )
}

// Component Properties
H2.propTypes = {
    font: PropTypes.string
}
H2.defaultProps = {
    font: 'primary'
}

export default H2