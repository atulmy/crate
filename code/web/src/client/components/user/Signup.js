// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../ui/grid'
import Button from '../ui/button'
import ImageTile from '../ui/image/Tile'
import { Input } from '../ui/input'
import { level1 } from '../ui/common/shadows'

// App Imports
import { register } from './api/actions'

// Component
class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: '',
            isLoading: false,
            complete: false,
            user: {
                name: '',
                email: '',
                password: '',
            }
        }
    }

    onChange(event) {
        let user = this.state.user
        user[event.target.name] = event.target.value

        this.setState({
            user
        })
    }

    onSubmit(event) {
        event.preventDefault()

        this.setState({
            isLoading: true
        })

        this.props.register(this.state.user)
            .then(response => {
                this.setState({
                    isLoading: false,
                    error: '',
                    complete: true
                })
            })
            .catch(error => {
                let errorMessage = 'Please try again.'

                if(error.response && error.response.data.error) {
                    errorMessage = error.response.data.error
                }

                this.setState({
                    isLoading: false,
                    error: errorMessage
                })
            })
    }

    render() {
        return(
            <Grid alignCenter={ true } style={ { padding: '2em' } }>
                <Helmet>
                    <title>Monthly supply of clothes and accessories for Men - Crate</title>
                </Helmet>

                <GridCell>
                    <Grid alignCenter={ true }>
                        <GridCell justifyCenter={ true }>
                            <ImageTile width={ 300 } height={ 530 } shadow={ level1 } image={ '/images/stock/men/1.jpg' } />
                        </GridCell>

                        <GridCell>
                            <Grid>
                                <GridCell justifyCenter={ true }>
                                    <ImageTile width={ 170 } height={ 250 } shadow={ level1 } image={ '/images/stock/women/2.jpg' } />
                                </GridCell>
                            </Grid>

                            <Grid>
                                <GridCell justifyCenter={ true }>
                                    <ImageTile width={ 170 } height={ 250 } shadow={ level1 } image={ '/images/stock/women/3.jpg' } style={ {  marginTop: '1.9em' } } />
                                </GridCell>
                            </Grid>
                        </GridCell>
                    </Grid>
                </GridCell>

                <GridCell style={ { textAlign: 'center' } }>
                    <form onSubmit={ this.onSubmit.bind(this) }>
                        <div style={ { width: '25em', margin: '0 auto' } }>
                            <Input
                                type="text"
                                fullWidth={ true }
                                placeholder="Name"
                                name="name"
                                value={ this.state.user.name }
                                onChange={ this.onChange.bind(this) }
                            />

                            <Input
                                type="email"
                                fullWidth={ true }
                                placeholder="Email"
                                name="email"
                                value={ this.state.user.email }
                                onChange={ this.onChange.bind(this) }
                                style={ { marginTop: '1em' } }
                            />

                            <Input
                                type="password"
                                fullWidth={ true }
                                placeholder="Password"
                                name="password"
                                value={ this.state.user.password }
                                onChange={ this.onChange.bind(this) }
                                style={ { marginTop: '1em' } }
                            />
                        </div>

                        <Button type="submit" theme="secondary" style={ { marginTop: '2em' } }>Signup</Button>
                    </form>
                </GridCell>
            </Grid>
        )
    }
}

// Component Properties
Signup.propTypes = {
    register: PropTypes.func.isRequired
}

export default connect(null, { register })(Signup)