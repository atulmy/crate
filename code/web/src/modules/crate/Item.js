// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/configs'
import userRoutes from '../../setup/routes/user'
import { messageShow, messageHide } from '../common/api/actions'
import { create } from '../subscription/api/actions'

// Component
class Item extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  onClickSubscribe = (event) => {
    event.preventDefault()

    this.setState({
      isLoading: true
    })

    this.props.messageShow('Subscribing, please wait...')

    this.props.create(this.state.user)
      .then(response => {
        this.setState({
          isLoading: false
        })

        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          this.props.messageShow('Signed up successfully.')

          this.props.history.push(userRoutes.login.path)
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error signing you up. Please try again.')

        this.setState({
          isLoading: false,
          error: 'Error signing up.'
        })
      })
      .then(() => {
        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  }

  render() {
    const { id, name, description } = this.props.crate

    return (
      <Card style={{ width: '18em', backgroundColor: white }}>
        <p style={{ padding: '2em 3em 0 3em' }}>
          <img src={`${ APP_URL }/images/crate.png`} alt={name} style={{ width: '100%' }}/>
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>{name}</H4>

          <p style={{ color: grey2, marginTop: '1em' }}>{description}</p>

          <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <Button theme="primary" onClick={this.onClickSubscribe}><Icon size={1.2} style={{ color: white }}>add</Icon> Subscribe</Button>
          </p>
        </div>
      </Card>
    )
  }
}

// Component Properties
Item.propTypes = {
  crate: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function loginState(state) {
  return {
    user: state.user
  }
}

export default Item