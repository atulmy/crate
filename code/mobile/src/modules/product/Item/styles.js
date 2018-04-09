// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { white, grey3 } from '../../../ui/common/colors'
import { deviceWidth, blockMargin, blockMarginHalf, blockPadding, font } from '../../../ui/common/responsive'

// Styles
const containerWidth = deviceWidth - (blockMargin * 2)
const containerHeight = deviceWidth + (blockMargin * 2) + 45
const imageWidth = deviceWidth - blockMargin
const imageHeight = deviceWidth - blockMargin

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    marginTop: blockMargin,
    marginHorizontal: blockMargin,
    elevation: 2,
    width: containerWidth,
    height: containerHeight
  },
  containerCompact: {
    backgroundColor: white,
    marginTop: blockMargin,
    marginHorizontal: blockMargin,
    elevation: 2,
    width: containerWidth / 2,
    height: containerHeight / 1.8
  },
  image: {
    width: imageWidth,
    height: imageHeight
  },
  imageCompact: {
    width: imageWidth / 2,
    height: imageHeight / 2
  },
  textContainer: {
    padding: blockPadding
  },
  title: {
    fontSize: font(22)
  },
  titleCompact: {
    fontSize: font(18)
  },
  description: {
    marginTop: blockMarginHalf,
    color: grey3,
    fontSize: font(16)
  },
  descriptionCompact: {
    marginTop: blockMarginHalf,
    color: grey3,
    fontSize: font(14)
  }
})
