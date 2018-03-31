// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { blockPadding, font } from '../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    flex: 1
  },
  itemContainer: {
    flex: 1
  },
  heading: {
    fontSize: font(18),
    paddingHorizontal: blockPadding,
    paddingTop: blockPadding
  }
})
