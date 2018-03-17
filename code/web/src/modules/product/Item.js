// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// UI Imports
import Card from '../../ui/card/Card'
import H4 from '../../ui/typography/H4'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { routeImage, routes } from '../../setup/routes'

// Component
const Item = (props) => {

  const { name, slug, description, image } = props.product

  return (
    <Link to={routes.product.path(slug)}>
      <Card style={{ width: '25em', margin: '2.5em auto', backgroundColor: white }}>
        <img src={routeImage + image} alt={name} style={{ width: '100%' }}/>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>{ name }</H4>

          <p style={{ color: grey2, marginTop: '1em' }}>{ description }</p>
        </div>
      </Card>
    </Link>
  )
}

// Component Properties
Item.propTypes = {
  product: PropTypes.object.isRequired
}

export default Item
