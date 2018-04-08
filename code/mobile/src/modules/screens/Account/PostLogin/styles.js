// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { white } from '../../../../ui/common/colors'
import { deviceWidth, deviceHeight } from '../../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  heroContainer: {
    flex: 1,
    elevation: 2,
    backgroundColor: white
  },
  hero: {
    width: deviceWidth,
    height: deviceHeight / 3
  }
})
