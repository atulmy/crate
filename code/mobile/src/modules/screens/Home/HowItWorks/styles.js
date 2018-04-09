// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { black, grey4, white } from '../../../../ui/common/colors'
import { blockMargin, blockPadding, deviceHeight, deviceWidth, font } from '../../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    margin: blockMargin
  },
  image: {
    width: deviceWidth - (blockMargin * 2),
    height: deviceHeight / 3
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: deviceHeight / 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: black.toString()+'55' // #RRGGBBAA where AA = 55
  },
  icon: {
    textShadowColor: grey4,
    textShadowRadius: 5,
    textShadowOffset: {width: 0, height: 1}
  },
  title: {
    color: white,
    fontSize: font(22),
    textAlign: 'center',
    textShadowColor: grey4,
    textShadowRadius: 5,
    textShadowOffset: {width: 0, height: 1}
  },
  description: {
    color: white,
    fontSize: font(16),
    textAlign: 'center',
    paddingHorizontal: blockPadding * 3,
    textShadowColor: grey4,
    textShadowRadius: 5,
    textShadowOffset: {width: 0, height: 1}
  }
})
