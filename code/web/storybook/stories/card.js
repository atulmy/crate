// Imports
import React from 'react'
import { storiesOf } from '@storybook/react'

// UI Imports
import Card from '../../src/ui/card/Card'
import H3 from '../../src/ui/typography/H1'

// Buttons
storiesOf('Card', module)
  .add('default', () => (
    <Card style={{ margin: '1em' }}>
      <H3 font="secondary">Hello</H3>
      <p>Lunas persuadere! Urias sunt castors de alter nomen. Sunt nixes perdere alter, festus capioes.</p>
    </Card>
  ))