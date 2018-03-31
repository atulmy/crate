// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { white, grey3 } from '../../../ui/common/colors'
import { deviceWidth, blockMargin, blockMarginHalf, blockPadding, font } from '../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    backgroundColor: white,
    marginTop: blockMargin,
    marginHorizontal: blockMargin,
    elevation: 2,
    width: deviceWidth - (blockMargin * 2),
    height: deviceWidth + (blockMargin * 2) + 45
  },
  image: {
    width: deviceWidth - blockMargin,
    height: deviceWidth - blockMargin
  },
  textContainer: {
    padding: blockPadding
  },
  title: {
    fontSize: font(22)
  },
  description: {
    marginTop: blockMarginHalf,
    color: grey3,
    fontSize: font(16)
  }
})
