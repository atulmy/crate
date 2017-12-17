// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import moment from 'moment'

// UI Imports
import {Grid, GridCell} from '../../ui/grid'
import Card from '../../ui/card/Card'
import {H2, H3, H4} from '../../ui/typography'
import {grey, grey2} from '../../ui/common/colors'

// App Imports
import {routeImage, routes} from '../../setup/routes'
import {renderIf} from '../../setup/helpers'
import {get} from './api/actions'
import Loading from '../common/Loading'
import Related from './Related'

// Component
class Detail extends Component {

  // Runs on server only for SSR
  static fetchData({store, params}) {
    return store.dispatch(get(params.slug))
  }

  // Runs on client only
  componentDidMount() {
    this.refresh(this.props.match.params.slug)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      this.refresh(nextProps.match.params.slug)
    }
  }

  refresh = (slug) => {
    this.props.get(slug)
  }

  render() {
    const {isLoading, item, error} = this.props.product

    return (
      <div>
        {
          !error
            ?
            (
              isLoading
                ?
                <Loading/>
                :
                renderIf(item && item.id, () => (
                  <div>
                    {/* SEO */}
                    <Helmet>
                      <title>{`Product - ${ item.name }`}</title>
                    </Helmet>

                    {/* Top title bar */}
                    <Grid style={{backgroundColor: grey}}>
                      <GridCell style={{padding: '2em', textAlign: 'center'}}>
                        <H3 font="secondary">Product</H3>
                      </GridCell>
                    </Grid>

                    {/* Product Details */}
                    <Grid gutter={true} alignCenter={true} style={{padding: '2em'}}>
                      {/* Left Content - Image */}
                      <GridCell style={{maxWidth: '35em'}}>
                        <Card>
                          <img src={routeImage + item.image} alt={item.name} style={{width: '100%'}}/>
                        </Card>
                      </GridCell>

                      {/* Right Content */}
                      <GridCell style={{textAlign: 'center'}}>
                        <H2 font="secondary">{item.name}</H2>

                        <H4 style={{marginTop: '1em'}}>{item.description}</H4>

                        <p style={{marginTop: '0.5em', color: grey2}}>Launched
                          on {moment.utc(item.createdAt).format('dddd, MMMM Do YYYY')}</p>
                      </GridCell>
                    </Grid>

                    {/* Related products title bar */}
                    <Grid style={{backgroundColor: grey}}>
                      <GridCell style={{padding: '2em', textAlign: 'center'}}>
                        <H3 font="secondary">Related Products</H3>
                      </GridCell>
                    </Grid>

                    {/* Related products list */}
                    <Related productId={item.id}/>
                  </div>
                ))
            )
            :
            <Redirect to={routes.home.path}/>
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

export default withRouter(connect(detailState, {get})(Detail))