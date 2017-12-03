// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../../ui/grid'
import Button from '../../../ui/button'
import Icon from '../../../ui/icon'
import H4 from '../../../ui/typography/H4'
import { Input, Textarea, Select } from '../../../ui/input'
import { white } from "../../../ui/common/colors"

// App Imports
import { create as productCreate, getTypes as getProductTypes } from '../../product/api/actions'
import { getGenders as getUserGenders } from '../../user/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'
import AdminMenu from '../common/Menu'
import admin from '../../../setup/routes/admin'

// Component
class ProductCreate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            error: '',
            isLoading: false,
            product: {
                name: '',
                slug: '',
                description: '',
                type: 0,
                gender: 0,
                image: ''
            },
            productTypes: [],
            userGenders: [],
        }
    }

    componentDidMount() {
        // Get product types
        this.props.getProductTypes()
            .then(response => {
                if(response.data.errors && response.data.errors.length > 0) {
                    this.props.messageShow(response.data.errors[0].message)
                } else {
                    this.setState({
                        productTypes: response.data.data.productTypes
                    })
                }
            })
            .catch(error => {
                this.props.messageShow('There was some error fetching product types. Please try again.')

                console.error(error)
            })

        // Get user genders
        this.props.getUserGenders()
            .then(response => {
                if(response.data.errors && response.data.errors.length > 0) {
                    this.props.messageShow(response.data.errors[0].message)
                } else {
                    this.setState({
                        userGenders: response.data.data.userGenders
                    })
                }
            })
            .catch(error => {
                this.props.messageShow('There was some error fetching product types. Please try again.')

                console.error(error)
            })
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

        this.props.productCreate(this.state.product)
            .then(response => {
                this.setState({
                    isLoading: false
                })

                if(response.data.errors && response.data.errors.length > 0) {
                    this.props.messageShow(response.data.errors[0].message)
                } else {
                    this.props.messageShow('Signed up successfully.')

                    this.props.history.push(admin.productList.path)
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
                                <Button><Icon size={ 1.2 }>arrow_back</Icon> Back</Button>
                            </Link>
                        </GridCell>
                    </Grid>

                    {/* Product list */}
                    <Grid alignCenter={ true } style={ { padding: '1em' } }>
                        <GridCell>
                            <H4 font="secondary" style={ { marginBottom: '1em', textAlign: 'center' } }>Create Product</H4>

                            {/* Signup Form */}
                            <form onSubmit={ this.onSubmit }>
                                <div style={ { width: '25em', margin: '0 auto' } }>
                                    {/* Name */}
                                    <Input
                                        type="text"
                                        fullWidth={ true }
                                        placeholder="Name"
                                        required="required"
                                        name="name"
                                        value={ this.state.product.name }
                                        onChange={ this.onChange }
                                    />

                                    {/* Description */}
                                    <Textarea
                                        fullWidth={ true }
                                        placeholder="Description"
                                        required="required"
                                        name="description"
                                        value={ this.state.product.description }
                                        onChange={ this.onChange }
                                        style={ { marginTop: '1em' } }
                                    />

                                    {/* Type */}
                                    <Select
                                        fullWidth={ true }
                                        required="required"
                                        name="type"
                                        value={ this.state.product.type }
                                        onChange={ this.onChange }
                                        style={ { marginTop: '1em' } }
                                    >
                                        {
                                            this.state.productTypes.length > 0
                                                ?
                                            this.state.productTypes.map(type => (
                                                <option value={ type.id }>{ type.name }</option>
                                            ))
                                                :
                                            <option disabled="disabled" selected="selected">Select type</option>
                                        }
                                    </Select>

                                    {/* Gender */}
                                    <Select
                                        fullWidth={ true }
                                        required="required"
                                        name="gender"
                                        value={ this.state.product.gender }
                                        onChange={ this.onChange }
                                        style={ { marginTop: '1em' } }
                                    >
                                        {
                                            this.state.userGenders.length > 0
                                                ?
                                            this.state.userGenders.map(type => (
                                                <option value={ type.id }>{ type.name }</option>
                                            ))
                                                :
                                            <option disabled="disabled" selected="selected">Select gender</option>
                                        }
                                    </Select>
                                </div>

                                <div style={ { marginTop: '2em', textAlign: 'center' } }>
                                    {/* Form submit */}
                                    <Button type="submit" theme="secondary" disabled={ this.state.isLoading }>
                                        <Icon size={ 1.2 } style={ { color: white } }>check</Icon> Save
                                    </Button>
                                </div>
                            </form>
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
    getProductTypes: PropTypes.func.isRequired,
    getUserGenders: PropTypes.func.isRequired,
    messageShow: PropTypes.func.isRequired,
    messageHide: PropTypes.func.isRequired
}

export default connect(null, { productCreate, getProductTypes, getUserGenders, messageShow, messageHide })(ProductCreate)