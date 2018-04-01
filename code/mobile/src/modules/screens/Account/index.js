// Imports
import React, { PureComponent } from 'react'
import { Text, View, TextInput, Image, ScrollView, KeyboardAvoidingView } from 'react-native'

// Assets
import coverImage from '../../../../assets/images/cover.jpg'

// UI Imports
import Icon from 'react-native-vector-icons/MaterialIcons'
import { deviceWidth, deviceHeight, blockPadding, blockMargin, blockMarginHalf, font } from '../../../ui/common/responsive'
import { white, grey2 } from '../../../ui/common/colors'
import Button from '../../../ui/button/Button'
import styles from './styles'

// App Imports
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'
import KeyboardVisible from '../../common/KeyboardVisible'
import { routes } from '../../../setup/Routes'

// Component
class Account extends PureComponent {

  render() {
    const { keyboardVisible } = this.props

    return (
      <View style={styles.container}>
        <Body>
          <KeyboardAvoidingView>
              <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  {/* Hero section */}
                  <View style={{ flex: 1, elevation: 2, backgroundColor: white }}>
                    <Image
                      source={coverImage}
                      resizeMode={'cover'}
                      style={{ width: deviceWidth, height: deviceHeight / 3 }}
                    />

                    <View style={{ flex: 1, flexDirection: 'row'}}>
                      <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: font(18), textAlign: 'center', padding: blockPadding }}>LOGIN</Text>
                      </View>

                      <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: font(18), textAlign: 'center', padding: blockPadding }}>SIGNUP</Text>
                      </View>
                    </View>
                  </View>

                  <View style={{ flex: 1, padding: blockPadding }}>
                    <TextInput
                      placeholder="Email"
                      keyboardType="email-address"
                      placeholderTextColor={grey2}
                      underlineColorAndroid={grey2}
                      returnKeyType="next"
                      style={styles.input}
                    />

                    <TextInput
                      placeholder="Password"
                      secureTextEntry={true}
                      placeholderTextColor={grey2}
                      underlineColorAndroid={grey2}
                      returnKeyType="go"
                      style={styles.input}
                    />

                    <View style={{ flex: 1, flexDirection: 'row'}}>
                      <View style={{ flex: 1 }} />

                      <View style={{ flex: 1, marginLeft: blockMargin }}>
                        <Button
                          title="Submit"
                          iconLeft={
                            <Icon
                              name="check"
                              size={font(18)}
                              color={white}
                            />
                          }
                          onPress={() => {}}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
          </KeyboardAvoidingView>
        </Body>

        { !keyboardVisible && <NavigationBottom /> }
      </View>
    )
  }
}

export default KeyboardVisible(Account)
