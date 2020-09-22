// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'
import ProductList from '../admin/product/List'

// Component
const Products = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>Products - Crate</title>
    </Helmet>

    <ProductList isAccess={props.user.details.role} />
  </div>
)

// Component Properties
Products.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function productState(state) {
  return {
    user: state.user
  }
}

export default connect(productState, { logout })(Products)
