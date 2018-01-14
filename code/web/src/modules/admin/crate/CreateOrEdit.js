// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../../ui/grid'
import Button from '../../../ui/button'
import Icon from '../../../ui/icon'
import H4 from '../../../ui/typography/H4'
import { Input, Textarea } from '../../../ui/input'
import { white } from "../../../ui/common/colors"

// App Imports
import admin from '../../../setup/routes/admin'
import { slug } from '../../../setup/helpers'
import {
  createOrUpdate as crateCreateOrUpdate,
  getById as getCrateById
} from '../../crate/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'
import AdminMenu from '../common/Menu'

// Component
class CreateOrEdit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      crate: {
        id: 0,
        name: '',
        description: ''
      },
      crateTypes: [],
      userGenders: [],
    }
  }

  componentDidMount() {
    // Get crate details (edit case)
    this.getCrate(parseInt(this.props.match.params.id))
  }

  getCrate = (crateId) => {
    if (crateId > 0) {
      this.props.getCrateById(crateId)
        .then(response => {
          if (response.data.errors && response.data.errors.length > 0) {
            this.props.messageShow(response.data.errors[0].message)
          } else {
            this.setState({
              crate: response.data.data.crateById
            })
          }
        })
        .catch(error => {
          this.props.messageShow('There was some error fetching crate types. Please try again.')
        })
    }
  }

  onChange = (event) => {
    let crate = this.state.crate
    crate[event.target.name] = event.target.value

    this.setState({
      crate
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.setState({
      isLoading: true
    })

    this.props.messageShow('Saving crate, please wait...')

    // Save crate
    this.props.crateCreateOrUpdate(this.state.crate)
      .then(response => {
        this.setState({
          isLoading: false
        })

        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          this.props.messageShow('Crate saved successfully.')

          this.props.history.push(admin.crateList.path)
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

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Crate / Create or Edit - Admin - Crate</title>
        </Helmet>

        {/* Top menu bar */}
        <AdminMenu/>

        {/* Page Content */}
        <div>
          {/* Top actions bar */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell style={{ textAlign: 'left' }}>
              <Link to={admin.crateList.path}>
                <Button><Icon size={1.2}>arrow_back</Icon> Back</Button>
              </Link>
            </GridCell>
          </Grid>

          {/* Crate list */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell>
              <H4 font="secondary" style={{ marginBottom: '1em', textAlign: 'center' }}>
                {this.props.match.params.id === undefined ? 'Create' : 'Edit'} Crate
              </H4>

              {/* Form */}
              <form onSubmit={this.onSubmit}>
                <div style={{ width: '25em', margin: '0 auto' }}>
                  {/* Name */}
                  <Input
                    type="text"
                    fullWidth={true}
                    placeholder="Name"
                    required="required"
                    name="name"
                    autocomplete="off"
                    value={this.state.crate.name}
                    onChange={this.onChange}
                  />

                  {/* Description */}
                  <Textarea
                    fullWidth={true}
                    placeholder="Description"
                    required="required"
                    name="description"
                    value={this.state.crate.description}
                    onChange={this.onChange}
                    style={{ marginTop: '1em' }}
                  />
                </div>

                {/* Form submit */}
                <div style={{ marginTop: '2em', textAlign: 'center' }}>
                  <Button type="submit" theme="secondary" disabled={this.state.isLoading}>
                    <Icon size={1.2} style={{ color: white }}>check</Icon> Save
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
  crateCreateOrUpdate: PropTypes.func.isRequired,
  getCrateById: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default withRouter(connect(null, {
  crateCreateOrUpdate,
  getCrateById,
  messageShow,
  messageHide
})(CreateOrEdit))