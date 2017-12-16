// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
const Grid = (props) => {
  const {
    children,
    flexCells,

    justifyRight,
    justifyCenter,

    alignTop,
    alignBottom,
    alignCenter,

    gutter,
    ...others
  } = props

  const GridCells = React.Children.map(children, (GridCell) => {
    if (!GridCell) {
      return null
    }
    if (GridCell.props) {
      return React.cloneElement(GridCell, {flexCells, gutter})
    }
    return GridCell
  })

  return (
    <div {...others}>
      {GridCells}

      {/* language=CSS */}
      <style jsx>{`
                div {
                    display: flex;
                    flex-flow: row;
                    flex-wrap: wrap;

                    ${ justifyRight ? 'justify-content: flex-end;' : '' }
                    ${ justifyCenter ? 'justify-content: center;' : '' }

                    ${ alignTop ? 'align-items: flex-start;' : '' }
                    ${ alignBottom ? 'align-items: flex-end;' : '' }
                    ${ alignCenter ? 'align-items: center;' : '' }

                    ${ gutter ? 'margin-left: -1em;' : 'margin-left: 0;' }
                }
            `}</style>
    </div>
  )
}

// Component Properties
Grid.propTypes = {
  flexCells: PropTypes.bool,

  justifyRight: PropTypes.bool,
  justifyCenter: PropTypes.bool,

  alignTop: PropTypes.bool,
  alignBottom: PropTypes.bool,
  alignCenter: PropTypes.bool,

  gutter: PropTypes.bool,
}
Grid.defaultProps = {
  flexCells: false,

  justifyRight: false,
  justifyCenter: false,

  alignTop: false,
  alignBottom: false,
  alignCenter: false,

  gutter: false,
}

export default Grid