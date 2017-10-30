// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
const GridCell = (props) => {
    const {
        children,
        flexCells,
        alignTop,
        alignBottom,
        alignCenter,
        justifyRight,
        justifyCenter,
        gutter,
        ...others
    } = props

    console.log(gutter)

    return(
        <div { ...others }>
            { children }

            {/* language=CSS */}
            <style jsx>{`
                div {
                    flex: 1;
                    ${ flexCells ? 'display: flex;' : '' }
                    ${ alignTop ? 'align-self: flex-start;' : '' }
                    ${ alignBottom ? 'align-self: flex-end;' : '' }
                    ${ alignCenter ? 'align-self: center;' : '' }
                    ${ justifyRight ? 'justify-content: flex-end;' : '' }
                    ${ justifyCenter ? 'justify-content: center;' : '' }
                    ${ gutter ? 'padding-left: 1em;' : 'padding-left: 0;' }
                }
            `}</style>
        </div>
    )
}

// Component Properties
GridCell.propTypes = {
    flexCells: PropTypes.bool,
    alignTop: PropTypes.bool,
    alignBottom: PropTypes.bool,
    alignCenter: PropTypes.bool,
    justifyRight: PropTypes.bool,
    justifyCenter: PropTypes.bool,
    gutter: PropTypes.bool
}
GridCell.defaultProps = {
    flexCells: false,
    alignTop: false,
    alignBottom: false,
    alignCenter: false,
    justifyRight: false,
    justifyCenter: false,
    gutter: false
}

export default GridCell