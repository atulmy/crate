// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { navigationTopHeight, blockPadding, font } from '../../../ui/common/responsive'
import { primary, white } from '../../../ui/common/colors'

export default StyleSheet.create({
  container: {
    elevation: 3,
    backgroundColor: primary,
    height: navigationTopHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: blockPadding,
    justifyContent: 'space-between'
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    color: white,
    fontSize: font(18)
  }
})
