// Imports
import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

// UI Imports
import {Input, Textarea, Select} from '../../src/ui/input'

// Buttons
storiesOf('Input', module)
  .add('text', () => (
    <Input type="text"/>
  ))
  .add('password', () => (
    <Input type="password"/>
  ))
  .add('textarea', () => (
    <Textarea/>
  ))
  .add('select', () => (
    <Select>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
      <option value="5">Five</option>
    </Select>
  ))