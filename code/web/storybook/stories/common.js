// Imports
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// UI Imports
import * as colors from '../../src/client/components/ui/common/colors'
import * as fonts from '../../src/client/components/ui/common/fonts'

// Stories

// Colors
const colorsMap = Object.keys(colors).map(colorKey => (
    { name: colorKey, code: colors[colorKey] }
))
let colorStories = storiesOf('Common/Colors', module)
colorsMap.map(color => {
    colorStories.add(color.name, () => (
        <span style={ { color: color.code } }>{ color.name } - { color.code }</span>
    ))
})

// Fonts
const fontsMap = Object.keys(fonts).map(fontKey => (
    { name: fontKey, family: fonts[fontKey] }
))
let fontsStories = storiesOf('Common/Fonts', module)
fontsMap.map(font => {
    fontsStories.add(font.name, () => (
        <span style={ { fontFamily: font.family } }>{ font.name } - { font.family }</span>
    ))
})