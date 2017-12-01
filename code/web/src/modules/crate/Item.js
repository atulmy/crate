// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Card from '../ui/card/Card'
import Button from '../ui/button/Button'
import H4 from '../ui/typography/H4'
import Icon from '../ui/icon'
import { white, grey2, black } from '../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/configs'

// Component
const Item = (props) => {

    const { id, name, description } = props.crate

    return (
        <Card style={ { width: '18em', backgroundColor: white } }>
            <p style={ { padding: '2em 3em 0 3em' } }>
                <img src={ `${ APP_URL }/images/crate.png` } alt={ name } style={ { width: '100%' } } />
            </p>

            <div style={ { padding: '1em 1.2em' } }>
                <H4 font="secondary" style={ { color: black } }>{ name }</H4>

                <p style={ { color: grey2, marginTop: '1em' } }>{ description }</p>

                <p style={ { textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' } }>
                    <Button theme="primary"><Icon size={ 1.2 } style={ { color: white } }>add</Icon> Subscribe</Button>
                </p>
            </div>
        </Card>
    )
}

// Component Properties
Item.propTypes = {
    crate: PropTypes.object.isRequired
}

export default Item