// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { blockMargin, blockPadding, font } from '../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: blockPadding
  },
  textContainer: {
    marginBottom: blockMargin
  },
  textHeading: {
    fontSize: font(20),
    marginBottom: blockMargin
  },
  textItem: {
    fontSize: font(16)
  }
})
