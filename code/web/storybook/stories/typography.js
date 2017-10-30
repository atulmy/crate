// Imports
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// UI Imports
import { H1, H2, H3, H4, H5, H6 } from '../../src/client/components/ui/typography'

// Stories
storiesOf('Typography', module)
    .add('H1/primary', () => (
        <H1 font="primary">Heading 1</H1>
    ))
    .add('H1/secondary', () => (
        <H1 font="secondary">Heading 1</H1>
    ))
    .add('H2', () => (
        <H2>Heading 2</H2>
    ))
    .add('H3', () => (
        <H3>Heading 3</H3>
    ))
    .add('H4', () => (
        <H4>Heading 4</H4>
    ))
    .add('H5', () => (
        <H5>Heading 5</H5>
    ))
    .add('H6', () => (
        <H6>Heading 6</H6>
    ))