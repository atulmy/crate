// Imports
import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

// UI Imports
import Button from '../../src/ui/button/Button'
import Icon from '../../src/ui/icon/Icon'

// Buttons
storiesOf('Button', module)
  .add('primary', () => (
    <Button type="button" theme="primary" onClick={action('clicked')}>Button</Button>
  ))
  .add('secondary', () => (
    <Button type="button" theme="secondary" onClick={action('clicked')}>Button</Button>
  ))
  .add('default', () => (
    <Button type="button" onClick={action('clicked')}>Button</Button>
  ))
  .add('with icon', () => (
    <Button type="button" theme="primary" onClick={action('clicked')}>Button <Icon size={1.3}>face</Icon></Button>
  ))