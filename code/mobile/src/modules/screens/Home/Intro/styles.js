// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { white } from '../../../../ui/common/colors'
import { blockMargin, blockPadding, deviceHeight, deviceWidth, font } from '../../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    elevation: 2,
    backgroundColor: white
  },
  hero: {
    width: deviceWidth,
    height: deviceHeight / 3
  },
  content: {
    padding: blockPadding * 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: font(22),
    marginBottom: blockMargin,
    textAlign: 'center'
  }
})
