// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../ui/grid'
import { H3 } from '../ui/typography'
import Button from '../ui/button'
import Icon from '../ui/icon'
import { white, grey } from '../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { getList as getProductList } from '../product/api/actions'
import Loading from '../common/Loading'
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
        return (
            <div>
                {/* SEO */}
                <Helmet>
                    <title>What's new - Crate</title>
                </Helmet>

                {/* Top title bar */}
                <Grid style={ { backgroundColor: grey } }>
                    <GridCell style={ { padding: '2em', textAlign: 'center'} }>
                        <H3 font="secondary">What's new</H3>
                    </GridCell>
                </Grid>

                {/* Product list */}
                <Grid>
                    {
                        this.props.products.isLoading
                            ?
                        <Loading />
                            :
                        (
                            this.props.products.list.length > 0
                                ?
                            this.props.products.list.map(product => (
                                <GridCell key={ product.id } style={ { textAlign: 'center' } }>
                                    <ProductItem product={ product } />
                                </GridCell>
                            ))
                                :
                            <p>No products to show.</p>
                        )
                    }
                </Grid>

                {/* Bottom call to action bar */}
                <Grid style={ { backgroundColor: grey } }>
                    <GridCell style={ { padding: '3em', textAlign: 'center' } }>
                        {
                            this.props.user.isAuthenticated
                                ?
                            <Link to={ userRoutes.subscriptions.path }>
                                <Button theme="primary">Subscribe <Icon size={ 1.2 } style={ { color: white } }>navigate_next</Icon></Button>
                            </Link>
                                :
                            <Link to={ userRoutes.signup.path }>
                                <Button theme="primary">Start <Icon size={ 1.2 } style={ { color: white } }>navigate_next</Icon></Button>
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
