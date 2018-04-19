// Imports
import { Dimensions } from 'react-native'

// Breakpoints
export const breakpointMobile = 320
export const breakpointTablet = 768

// Device
export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height

// Margin and Paddings
export const blockMargin = deviceWidth >= breakpointTablet ? 20 : 10
export const blockMarginHalf = blockMargin / 2
export const blockPadding = deviceWidth >= breakpointTablet ? 20 : 10
export const blockPaddingHalf = blockPadding / 2

// Font
export const font = size => (size * (deviceWidth >= breakpointTablet ? 1.25 : 1))

// Button
export const buttonPadding = deviceWidth >= breakpointTablet ? 15 : 10
export const buttonRadius = deviceWidth >= breakpointTablet ? 30 : 20
export const buttonHeight = deviceWidth >= breakpointTablet ? 55 : 40

// Item
export const itemSpacing = deviceWidth >= breakpointTablet ? 30 : 20
export const itemRadius = deviceWidth >= breakpointTablet ? 30 : 20

// Navigation
export const navigationTopHeight = deviceWidth >= breakpointTablet ? 70 : 50
export const navigationBottomHeight = deviceWidth >= breakpointTablet ? 70 : 50
