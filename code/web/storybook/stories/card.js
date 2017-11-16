// Imports
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// UI Imports
import Card from '../../src/client/components/ui/card/Card'
import H3 from '../../src/client/components/ui/typography/H1'

// Buttons
storiesOf('Card', module)
    .add('default', () => (
        <Card style={ { margin: '1em' } }>
            <H3 font="secondary">Hello</H3>
            <p>Lunas persuadere! Urias sunt castors de alter nomen. Sunt nixes perdere alter, festus capioes.</p>
        </Card>
    ))