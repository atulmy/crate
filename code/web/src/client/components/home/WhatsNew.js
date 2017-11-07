// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../ui/grid'
import { H3, H4 } from '../ui/typography'
import Button from '../ui/button'
import Icon from '../ui/icon'
import { textLevel1 } from '../ui/common/shadows'
import { white, grey, grey3 } from '../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { actionBlogsFetch } from './api/actions'

// Component
class WhatsNew extends Component {

    static fetchData({store}) {
        return store.dispatch(actionBlogsFetch())
    }

    componentDidMount() {
        this.props.actionBlogsFetch()
    }

    refresh() {
        this.props.actionBlogsFetch()
    }

    render() {
        return (
            <div>
                {/* SEO */}
                <Helmet>
                    <title>What's new - Crate</title>
                </Helmet>

                {/* Top title bar */}
                <Grid gutter={false} style={{backgroundColor: grey}}>
                    <GridCell style={{padding: '2em', textAlign: 'center'}}>
                        <H3 font="secondary">What's new</H3>
                    </GridCell>
                </Grid>

                {
                    this.props.blogs.list.length > 0
                        ?
                    this.props.blogs.list.map(blog => (
                        <p>{ blog.title }</p>
                    ))
                        :
                    <p>Loading...</p>
                }

                {/* Bottom call to action bar */}
                <Grid gutter={false} style={{backgroundColor: grey}}>
                    <GridCell style={{padding: '3em', textAlign: 'center'}}>
                        {
                            this.props.user.isAuthenticated
                                ?
                            <Link to={userRoutes.subscriptions.path}>
                                <Button theme="primary" style={{marginTop: '1em'}}>Subscribe <Icon size={1.2} style={{color: white}}>navigate_next</Icon></Button>
                            </Link>
                                :
                            <Link to={userRoutes.signup.path}>
                                <Button theme="primary" style={{marginTop: '1em'}}>Start <Icon size={1.2} style={{color: white}}>navigate_next</Icon></Button>
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
    actionBlogsFetch: PropTypes.func.isRequired,
}

// Component State
function whatsNewState(state) {
    return {
        user: state.user,
        blogs: state.blogs
    }
}

export default connect(whatsNewState, { actionBlogsFetch })(WhatsNew)