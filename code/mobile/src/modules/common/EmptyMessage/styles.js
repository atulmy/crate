// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { blockMarginHalf, blockPadding, font } from '../../../ui/common/responsive'
import { grey2 } from '../../../ui/common/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: blockPadding
  },
  text: {
    fontSize: font(16),
    color: grey2,
    marginTop: blockMarginHalf
  }
})
