// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { deviceWidth, blockMargin, blockMarginHalf, font } from '../../../ui/common/responsive'
import { white, grey3, secondary } from '../../../ui/common/colors'

// Styles
export default StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: deviceWidth,
    height: deviceWidth
  },
  textContainer: {
    padding: blockMargin,
    backgroundColor: white,
    elevation: 1
  },
  title: {
    fontSize: font(26),
    color: secondary
  },
  description: {
    marginTop: blockMarginHalf,
    color: grey3,
    fontSize: font(16)
  },
  date: {
    marginTop: blockMarginHalf,
    color: grey3,
    fontSize: font(16)
  }
})
