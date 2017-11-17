// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import moment from 'moment'

// UI Imports
import { Grid, GridCell } from '../ui/grid'
import Card from '../ui/card/Card'
import { H2, H3, H4 } from '../ui/typography'
import { grey, grey2 } from '../ui/common/colors'

// App Imports
import { routeImage } from '../../setup/routes'
import { get } from './api/actions'
import Loading from '../common/Loading'

// Component
class Detail extends Component {

    // Runs on server only for SSR
    static fetchData({ store, params }) {
        return store.dispatch(get(params.slug))
    }

    componentDidMount() {
        this.props.get(this.props.match.params.slug)
    }

    render() {
        const { isLoading, item } = this.props.product

        return(
            <div>
                {
                    isLoading
                        ?
                    <Loading />
                        :
                    <div>
                        {/* SEO */}
                        <Helmet>
                            <title>{ `Product - ${ item.name }` }</title>
                        </Helmet>

                        {/* Top title bar */}
                        <Grid style={ { backgroundColor: grey } }>
                            <GridCell style={ { padding: '2em', textAlign: 'center'} }>
                                <H3 font="secondary">Product</H3>
                            </GridCell>
                        </Grid>

                        {/* Product Details */}
                        <Grid gutter={ true } alignCenter={ true } style={ { padding: '2em' } }>
                            {/* Left Content - Image */}
                            <GridCell style={ { maxWidth: '30em' } }>
                                <Card>
                                    <img src={ routeImage + item.image } alt={ item.name } style={ { width: '100%' } } />
                                </Card>
                            </GridCell>

                            {/* Right Content */}
                            <GridCell style={ { textAlign: 'center' } }>
                                <H2 font="secondary">{ item.name }</H2>

                                <H4 style={ { marginTop: '1em' } }>{ item.description }</H4>

                                <p style={ { marginTop: '1.5em', color: grey2 } }>Launched on { moment(item.createdAt).format('dddd, MMMM Do YYYY') }</p>
                            </GridCell>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
}

// Component Properties
Detail.propTypes = {
    product: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired
}

// Component State
function detailState(state) {
    return {
        product: state.product
    }
}

export default connect(detailState, { get })(Detail)