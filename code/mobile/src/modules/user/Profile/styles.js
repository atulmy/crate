// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { blockMargin, font } from '../../../ui/common/responsive'
import { grey3 } from '../../../ui/common/colors'

// Styles
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: font(22),
    marginVertical: blockMargin
  },
  email: {
    fontSize: font(18),
    color: grey3,
    marginBottom: blockMargin * 2
  }
})
