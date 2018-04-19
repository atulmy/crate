// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { blockMarginHalf, blockPadding } from '../../../ui/common/responsive'
import { grey3 } from '../../../ui/common/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: blockPadding
  },
  text: {
    color: grey3,
    marginTop: blockMarginHalf
  }
})
