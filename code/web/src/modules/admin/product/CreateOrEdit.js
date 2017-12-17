// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

// UI Imports
import {Grid, GridCell} from '../../../ui/grid'
import Button from '../../../ui/button'
import Icon from '../../../ui/icon'
import H4 from '../../../ui/typography/H4'
import {Input, Textarea, Select} from '../../../ui/input'
import {white} from "../../../ui/common/colors"

// App Imports
import admin from '../../../setup/routes/admin'
import {routeImage} from "../../../setup/routes"
import {renderIf, slug} from '../../../setup/helpers'
import {
  createOrUpdate as productCreateOrUpdate,
  getTypes as getProductTypes,
  getById as getProductById
} from '../../product/api/actions'
import {getGenders as getUserGenders} from '../../user/api/actions'
import {upload, messageShow, messageHide} from '../../common/api/actions'
import AdminMenu from '../common/Menu'

// Component
class CreateOrEdit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      product: {
        id: 0,
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
        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          let product = this.state.product
          product.gender = response.data.data.productTypes[0].id

          this.setState({
            productTypes: response.data.data.productTypes,
            product
          })
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error fetching product types. Please try again.')
      })

    // Get user genders
    this.props.getUserGenders()
      .then(response => {
        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          let product = this.state.product
          product.gender = response.data.data.userGenders[0].id

          this.setState({
            userGenders: response.data.data.userGenders,
            product
          })
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error fetching product types. Please try again.')
      })

    // Get product details (edit case)
    this.getProduct(parseInt(this.props.match.params.id))
  }

  getProduct = (productId) => {
    if (productId > 0) {
      this.props.getProductById(productId)
        .then(response => {
          if (response.data.errors && response.data.errors.length > 0) {
            this.props.messageShow(response.data.errors[0].message)
          } else {
            this.setState({
              product: response.data.data.productById
            })
          }
        })
        .catch(error => {
          this.props.messageShow('There was some error fetching product types. Please try again.')
        })
    }
  }

  onChange = (event) => {
    let product = this.state.product
    product[event.target.name] = event.target.value

    if (event.target.name === 'name') {
      product.slug = slug(event.target.value)
    }

    this.setState({
      product
    })
  }

  onChangeSelect = (event) => {
    let product = this.state.product
    product[event.target.name] = parseInt(event.target.value)

    this.setState({
      product
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.setState({
      isLoading: true
    })

    this.props.messageShow('Saving product, please wait...')

    // Save product
    this.props.productCreateOrUpdate(this.state.product)
      .then(response => {
        this.setState({
          isLoading: false
        })

        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          this.props.messageShow('Signed up successfully.')

          this.props.history.push(admin.productList.path)
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error. Please try again.')

        this.setState({
          isLoading: false
        })
      })
      .then(() => {
        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  }

  onUpload = (event) => {
    this.props.messageShow('Uploading file, please wait...')

    this.setState({
      isLoading: true
    })

    let data = new FormData()
    data.append('file', event.target.files[0])

    // Upload image
    this.props.upload(data)
      .then(response => {
        if (response.status === 200) {
          this.props.messageShow('File uploaded successfully.')

          let product = this.state.product
          product.image = `/images/uploads/${ response.data.file }`

          this.setState({
            product
          })
        } else {
          this.props.messageShow('Please try again.')
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error. Please try again.')

      })
      .then(() => {
        this.setState({
          isLoading: false
        })

        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Product / Create or Edit - Admin - Crate</title>
        </Helmet>

        {/* Top menu bar */}
        <AdminMenu/>

        {/* Page Content */}
        <div>
          {/* Top actions bar */}
          <Grid alignCenter={true} style={{padding: '1em'}}>
            <GridCell style={{textAlign: 'left'}}>
              <Link to={admin.productList.path}>
                <Button><Icon size={1.2}>arrow_back</Icon> Back</Button>
              </Link>
            </GridCell>
          </Grid>

          {/* Product list */}
          <Grid alignCenter={true} style={{padding: '1em'}}>
            <GridCell>
              <H4 font="secondary" style={{
                marginBottom: '1em',
                textAlign: 'center'
              }}>{this.props.match.params.id === undefined ? 'Create' : 'Edit'} Product</H4>

              {/* Signup Form */}
              <form onSubmit={this.onSubmit}>
                <div style={{width: '25em', margin: '0 auto'}}>
                  {/* Name */}
                  <Input
                    type="text"
                    fullWidth={true}
                    placeholder="Name"
                    required="required"
                    name="name"
                    value={this.state.product.name}
                    onChange={this.onChange}
                  />

                  {/* Description */}
                  <Textarea
                    fullWidth={true}
                    placeholder="Description"
                    required="required"
                    name="description"
                    value={this.state.product.description}
                    onChange={this.onChange}
                    style={{marginTop: '1em'}}
                  />

                  {/* Type */}
                  <Select
                    fullWidth={true}
                    required="required"
                    name="type"
                    value={this.state.product.type}
                    onChange={this.onChangeSelect}
                    style={{marginTop: '1em'}}
                  >
                    {
                      this.state.productTypes.length > 0
                        ?
                        this.state.productTypes.map(type => (
                          <option value={type.id} key={type.id}>{type.name}</option>
                        ))
                        :
                        <option disabled="disabled" selected="selected">Select type</option>
                    }
                  </Select>

                  {/* Gender */}
                  <Select
                    fullWidth={true}
                    required="required"
                    name="gender"
                    value={this.state.product.gender}
                    onChange={this.onChange}
                    style={{marginTop: '1em'}}
                  >
                    {
                      this.state.userGenders.length > 0
                        ?
                        this.state.userGenders.map(gender => (
                          <option value={gender.id} key={gender.id}>{gender.name}</option>
                        ))
                        :
                        <option disabled="disabled" selected="selected">Select gender</option>
                    }
                  </Select>

                  {/* Upload File */}
                  <div style={{marginTop: '1em'}}>
                    <input
                      type="file"
                      onChange={this.onUpload}
                      required="required"
                    />
                  </div>

                  {renderIf(this.state.product.image !== '', () => (
                    <img src={routeImage + this.state.product.image} alt="Product Image"
                         style={{width: 200, marginTop: '1em'}}/>
                  ))}
                </div>

                <div style={{marginTop: '2em', textAlign: 'center'}}>
                  {/* Form submit */}
                  <Button type="submit" theme="secondary" disabled={this.state.isLoading}>
                    <Icon size={1.2} style={{color: white}}>check</Icon> Save
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
CreateOrEdit.propTypes = {
  productCreateOrUpdate: PropTypes.func.isRequired,
  getProductById: PropTypes.func.isRequired,
  getProductTypes: PropTypes.func.isRequired,
  getUserGenders: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default withRouter(connect(null, {
  productCreateOrUpdate,
  getProductById,
  getProductTypes,
  getUserGenders,
  upload,
  messageShow,
  messageHide
})(CreateOrEdit))