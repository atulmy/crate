// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'

// App Imports
import { getRelatedList as getProductRelatedList } from '../product/api/actions'
import Loading from '../common/Loading'
import ProductItem from '../product/Item'

// Component
class Related extends Component {

    componentDidMount() {
        this.refresh(this.props.productId)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.productId !== this.props.productId) {
            this.refresh(nextProps.productId)
        }
    }

    refresh = (productId) => {
        this.props.getProductRelatedList(productId)
    }

    render() {
        const { isLoading, list } = this.props.productsRelated

        return (
            <div>
                {/* Related product list */}
                <Grid>
                    {
                        isLoading
                            ?
                        <Loading />
                            :
                        (
                            list.length > 0
                                ?
                            list.map(product => (
                                <GridCell key={ product.id } style={ { textAlign: 'center' } }>
                                    <ProductItem product={ product } />
                                </GridCell>
                            ))
                                :
                            <p>No related products to show.</p>
                        )
                    }
                </Grid>
            </div>
        )
    }
}

// Component Properties
Related.propTypes = {
    productId: PropTypes.number.isRequired,
    productsRelated: PropTypes.object.isRequired,
    getProductRelatedList: PropTypes.func.isRequired
}

// Component State
function relatedState(state) {
    return {
        productsRelated: state.productsRelated
    }
}

export default withRouter(connect(relatedState, { getProductRelatedList })(Related))
