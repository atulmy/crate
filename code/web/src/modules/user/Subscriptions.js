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
import { white, grey, grey3 } from '../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { getList as getCratesList } from '../crate/api/actions'
import { getList as getSubscriptionsList } from '../subscription/api/actions'
import Loading from '../common/Loading'
import CrateItem from '../crate/Item'

// Component
class Subscriptions extends Component {

    // Runs on server only for SSR
    static fetchData({ store }) {
        return store.dispatch(getCratesList())
    }

    // Runs on client only
    componentDidMount() {
        this.props.getCratesList()
        this.props.getSubscriptionsList()
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
                        <H3 font="secondary">Subscriptions</H3>
                    </GridCell>
                </Grid>

                {/* Product list */}
                <Grid>
                    <GridCell>
                        {
                            this.props.crates.isLoading
                                ?
                            <Loading />
                                :
                            (
                                this.props.crates.list.length > 0
                                    ?
                                this.props.crates.list.map(crate => (
                                    <div key={ crate.id } style={ { margin: '2em', float: 'left' } }>
                                        <CrateItem crate={ crate } />
                                    </div>
                                ))
                                    :
                                <p>No crates to show.</p>
                            )
                        }
                    </GridCell>
                </Grid>
            </div>
        )
    }
}

// Component Properties
Subscriptions.propTypes = {
    subscriptions: PropTypes.object.isRequired,
    crates: PropTypes.object.isRequired,
    getSubscriptionsList: PropTypes.func.isRequired,
    getCratesList: PropTypes.func.isRequired
}

// Component State
function subscriptionsState(state) {
    return {
        subscriptions: state.subscriptions,
        crates: state.crates
    }
}

export default connect(subscriptionsState, { getSubscriptionsList, getCratesList })(Subscriptions)
