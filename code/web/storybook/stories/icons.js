// Imports
import React from 'react'
import { storiesOf } from '@storybook/react'

// UI Imports
import Icon from '../../src/ui/icon/Icon'

// Buttons
storiesOf('Icon', module)
  .add('simple', () => (
    <Icon size={3}>face</Icon>
  ))
  .add('color', () => (
    <Icon size={3} style={{ color: 'red' }}>face</Icon>
  ))