// Imports
import { StyleSheet } from 'react-native'

import { deviceWidth, deviceHeight, blockPadding, blockMargin, blockMarginHalf, blockPaddingHalf, font } from '../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    marginBottom: blockMargin,
    paddingHorizontal: blockPaddingHalf,
    height: font(35),
    fontSize: font(18),
  }
})
