// Imports
import React from 'react'
import PropTypes from 'prop-types'

// App Imports
import { routeImage } from '../../setup/routes'

// Component
const Item = (props) => {

    const { id, name, description, image } = props.product

    return (
        <div>
            <p>{ name }</p>
            <p>{ description }</p>
            <p><img src={ routeImage + image } alt={ name } /></p>
        </div>
    )
}

// Component Properties
Item.propTypes = {
    product: PropTypes.object.isRequired
}

export default Item