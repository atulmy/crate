// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../../ui/grid'

// App Imports
import { getList as getSubscriptionsList } from '../../subscription/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import AdminMenu from '../common/Menu'

// Component
class List extends Component {

  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getSubscriptionsList('DESC'))
  }

  // Runs on client only
  componentDidMount() {
    this.props.getSubscriptionsList('DESC')
  }

  render() {
    const { isLoading, list } = this.props.subscriptions

    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Crates - Admin - Crate</title>
        </Helmet>

        {/* Top menu bar */}
        <AdminMenu/>

        {/* Page Content */}
        <div>
          {/* Subscriptions list */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell>
              <table className="striped">
                <thead>
                  <tr>
                    <th>Crate</th>
                    <th>User</th>
                    <th>Created at</th>
                  </tr>
                </thead>

                <tbody>
                {
                  isLoading
                    ? <tr>
                        <td colSpan="6">
                          <Loading message="loading crates..."/>
                        </td>
                      </tr>
                    : list.length > 0
                      ? list.map(({id, user, crate, createdAt}) => (
                          <tr key={id}>
                            <td>
                              { crate.name }
                            </td>

                            <td>
                              { user.name } - { user.email }
                            </td>

                            <td>
                              { new Date(createdAt).toDateString() }
                            </td>
                          </tr>
                        ))
                      : <tr>
                          <td colSpan="6">
                            <EmptyMessage message="No subscriptions to show."/>
                          </td>
                        </tr>
                }
                </tbody>
              </table>
            </GridCell>
          </Grid>
        </div>
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  subscriptions: PropTypes.object.isRequired,
  getSubscriptionsList: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function listState(state) {
  return {
    subscriptions: state.subscriptions
  }
}

export default connect(listState, { getSubscriptionsList, messageShow, messageHide })(List)