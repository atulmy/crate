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
