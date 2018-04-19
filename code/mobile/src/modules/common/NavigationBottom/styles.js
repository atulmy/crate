// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { navigationBottomHeight, font } from '../../../ui/common/responsive'
import { white } from '../../../ui/common/colors'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: navigationBottomHeight,
    elevation: 5,
    backgroundColor: white
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6
  },
  itemTitle: {
    fontSize: font(11),
    paddingTop: 1
  }
})
