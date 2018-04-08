// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { deviceWidth, blockMargin, blockMarginHalf, blockPadding, font } from '../../../ui/common/responsive'
import { white, grey3 } from '../../../ui/common/colors'

// Styles
const imageDimension = ((deviceWidth / 7)  * 2)

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: blockPadding,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1
  },
  imageContainer: {
    width: imageDimension
  },
  image: {
    marginLeft: blockMargin,
    marginTop: blockMargin,
    width: imageDimension - blockMargin,
    height: imageDimension - blockMargin
  },
  textContainer: {
    padding: blockPadding,
    width: ((deviceWidth / 7)  * 5) - (blockPadding * 2)
  },
  title: {
    fontSize: font(22)
  },
  description: {
    fontSize: font(16),
    marginTop: blockMarginHalf,
    color: grey3,
    marginBottom: blockMargin
  }
})
