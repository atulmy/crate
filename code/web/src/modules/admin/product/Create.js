// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import moment from 'moment'

// UI Imports
import { Grid, GridCell } from '../../../ui/grid'
import Button from '../../../ui/button'
import Icon from '../../../ui/icon'

// App Imports
import { create as productCreate } from '../../product/api/actions'
import AdminMenu from '../common/Menu'
import admin from '../../../setup/routes/admin'
import { messageShow, messageHide } from '../../common/api/actions'

// Component
class ProductCreate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            error: '',
            isLoading: false,
            product: {
                name: '',
                email: '',
                password: '',
            }
        }
    }

    onChange = (event) => {
        let product = this.state.product
        product[event.target.name] = event.target.value

        this.setState({
            product
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        this.setState({
            isLoading: true
        })

        this.props.messageShow('Signing you up, please wait...')

        this.props.register(this.state.user)
            .then(response => {
                this.setState({
                    isLoading: false
                })

                if(response.data.errors && response.data.errors.length > 0) {
                    this.props.messageShow(response.data.errors[0].message)
                } else {
                    this.props.messageShow('Signed up successfully.')

                    this.props.history.push(userRoutes.login.path)
                }

                window.setTimeout(() => {
                    this.props.messageHide()
                }, 5000)
            })
            .catch(error => {
                this.props.messageShow('There was some error signing you up. Please try again.')

                window.setTimeout(() => {
                    this.props.messageHide()
                }, 5000)

                this.setState({
                    isLoading: false,
                    error: 'Error signing up.'
                })
            })
    }

    render() {
        return(
            <div>
                {/* SEO */}
                <Helmet>
                    <title>Product / Create - Admin - Crate</title>
                </Helmet>

                {/* Top menu bar */}
                <AdminMenu />

                {/* Page Content */}
                <div>
                    {/* Top actions bar */}
                    <Grid alignCenter={ true } style={ { padding: '1em' } }>
                        <GridCell style={ { textAlign: 'left' } }>
                            <Link to={ admin.productList.path }>
                                <Button style={ { marginTop: '1em' } }><Icon size={ 1.2 }>arrow_back</Icon> Back</Button>
                            </Link>
                        </GridCell>
                    </Grid>

                    {/* Product list */}
                    <Grid alignCenter={ true } style={ { padding: '1em' } }>
                        <GridCell>

                        </GridCell>
                    </Grid>
                </div>
            </div>
        )
    }
}

// Component Properties
ProductCreate.propTypes = {
    productCreate: PropTypes.func.isRequired,
    messageShow: PropTypes.func.isRequired,
    messageHide: PropTypes.func.isRequired
}

export default connect(null, { productCreate, messageShow, messageHide })(ProductCreate)