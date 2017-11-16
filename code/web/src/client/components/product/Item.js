// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Card from '../ui/card/Card'
import H4 from '../ui/typography/H4'
import { white, grey2 } from '../ui/common/colors'

// App Imports
import { routeImage } from '../../setup/routes'

// Component
const Item = (props) => {

    const { id, name, description, image } = props.product

    return (
        <Card style={ { width: '25em', margin: '2.5em auto', backgroundColor: white } }>
            <img src={ routeImage + image } alt={ name } style={ { width: '100%' } } />

            <div style={ { padding: '1em 1.2em' } }>
                <H4 font="secondary">{ name }</H4>

                <p style={ { color: grey2, marginTop: '1em' } }>{ description }</p>
            </div>
        </Card>
    )
}

// Component Properties
Item.propTypes = {
    product: PropTypes.object.isRequired
}

export default Item