// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import { white, grey, grey2 } from '../../ui/common/colors'

// App Imports
import crateRoutes from '../../setup/routes/crate'
import userRoutes from '../../setup/routes/user'
import { getList as getProductList } from '../product/api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import ProductItem from '../product/Item'

// Component
class WhatsNew extends Component {

  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getProductList())
  }

  // Runs on client only
  componentDidMount() {
    this.props.getProductList()
  }

  render() {
    const { isLoading, list } = this.props.products

    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>What's new - Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">What's new</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>Watch this space to keep updated with latest clothes and
              accessories we add to your crates.</p>
          </GridCell>
        </Grid>

        {/* Product list */}
        <Grid>
          {
            isLoading
              ?
            <Loading/>
              :
            (
              list.length > 0
                ?
              list.map(product => (
                <GridCell key={product.id} style={{ textAlign: 'center' }}>
                  <ProductItem product={product}/>
                </GridCell>
              ))
                :
              <EmptyMessage message="No products to show" />
            )
          }
        </Grid>

        {/* Bottom call to action bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '3em', textAlign: 'center' }}>
            <p style={{ marginBottom: '1em', color: grey2 }}>Like what you see?</p>

            {
              this.props.user.isAuthenticated
                ?
              <Link to={crateRoutes.list.path}>
                <Button theme="primary">Subscribe <Icon size={1.2}
                                                        style={{ color: white }}>navigate_next</Icon></Button>
              </Link>
                :
              <Link to={userRoutes.signup.path}>
                <Button theme="primary">Start <Icon size={1.2} style={{ color: white }}>navigate_next</Icon></Button>
              </Link>
            }
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
WhatsNew.propTypes = {
  user: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  getProductList: PropTypes.func.isRequired
}

// Component State
function whatsNewState(state) {
  return {
    user: state.user,
    products: state.products
  }
}

export default connect(whatsNewState, { getProductList })(WhatsNew)
