// Imports
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// UI Imports
import { Input, Textarea } from '../../src/client/components/ui/input'

// Buttons
storiesOf('Input', module)
    .add('text', () => (
        <Input type="text" />
    ))
    .add('password', () => (
        <Input type="password" />
    ))
    .add('textarea', () => (
        <Textarea />
    ))