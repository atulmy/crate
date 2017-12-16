// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import moment from 'moment'

// UI Imports
import {Grid, GridCell} from '../../../ui/grid'
import Button from '../../../ui/button'
import Icon from '../../../ui/icon'
import {white, black} from '../../../ui/common/colors'

// App Imports
import {getList as getProductList} from '../../product/api/actions'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import AdminMenu from '../common/Menu'
import {routeImage} from '../../../setup/routes'
import admin from '../../../setup/routes/admin'

// Component
class List extends Component {

  // Runs on server only for SSR
  static fetchData({store}) {
    return store.dispatch(getProductList())
  }

  // Runs on client only
  componentDidMount() {
    this.props.getProductList()
  }

  render() {
    const {isLoading, list} = this.props.products

    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Products - Admin - Crate</title>
        </Helmet>

        {/* Top menu bar */}
        <AdminMenu/>

        {/* Page Content */}
        <div>
          {/* Top actions bar */}
          <Grid alignCenter={true} style={{padding: '1em'}}>
            <GridCell style={{textAlign: 'right'}}>
              <Link to={admin.productCreate.path}>
                <Button theme="secondary" style={{marginTop: '1em'}}><Icon size={1.2}
                                                                           style={{color: white}}>add</Icon> Add</Button>
              </Link>
            </GridCell>
          </Grid>

          {/* Product list */}
          <Grid alignCenter={true} style={{padding: '1em'}}>
            <GridCell>
              <table className="striped">
                <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Created at</th>
                  <th>Updated at</th>
                  <th style={{textAlign: 'center'}}>Actions</th>
                </tr>
                </thead>

                <tbody>
                {
                  isLoading
                    ?
                    <tr>
                      <td colspan="6">
                        <Loading message="loading products..."/>
                      </td>
                    </tr>
                    :
                    (
                      list.length > 0
                        ?
                        list.map(({id, image, name, description, createdAt, updatedAt}) => (
                          <tr key={id}>
                            <td>
                              <img src={routeImage + image} alt={name} style={{width: 100}}/>
                            </td>

                            <td>
                              {name}
                            </td>

                            <td>
                              {description}
                            </td>

                            <td>
                              {moment.utc(createdAt).format('dddd, MMMM Do YYYY')}
                            </td>

                            <td>
                              {moment.utc(updatedAt).format('dddd, MMMM Do YYYY')}
                            </td>

                            <td style={{textAlign: 'center'}}>
                              <Link to={admin.productEdit.path(id)}>
                                <Icon size={2} style={{color: black}}>mode_edit</Icon>
                              </Link>

                              <Icon size={2} style={{marginLeft: '0.5em'}}>delete</Icon>
                            </td>
                          </tr>
                        ))
                        :
                        <tr>
                          <td colspan="6">
                            <EmptyMessage message="No products to show."/>
                          </td>
                        </tr>
                    )
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
  products: PropTypes.object.isRequired,
  getProductList: PropTypes.func.isRequired
}

// Component State
function listState(state) {
  return {
    products: state.products
  }
}

export default connect(listState, {getProductList})(List)