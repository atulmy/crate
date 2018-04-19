// Imports
import React, { PureComponent } from 'react'
import { Text, View, Linking, ScrollView } from 'react-native'

// UI Imports
import ActionIcon from '../../../ui/icon/ActionIcon'
import Button from '../../../ui/button/Button'
import styles from './styles'

// App Imports
import NavigationTop from '../../common/NavigationTop'
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'

// Component
export default class Info extends PureComponent {

  github = () => {
    Linking.openURL('https://github.com/atulmy/crate')
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationTop
          title={'Info'}
          leftIcon={
            <ActionIcon
              icon={'arrow-back'}
              onPress={() => this.props.navigation.goBack()}
            />
          }
        />

        <Body>
          <ScrollView>
            <View style={styles.content}>
              <Text style={styles.textHeading}>A very basic replica of stitchfix.com / krate.in which offers users to get monthly subscription of trendy clothes and accessories.</Text>

              <View style={styles.textContainer}>
                <Text style={styles.textHeading}>Built using</Text>

                <Text style={styles.textItem}>- React</Text>
                <Text style={styles.textItem}>- React Native</Text>
                <Text style={styles.textItem}>- GraphQL</Text>
                <Text style={styles.textItem}>- Node</Text>
                <Text style={styles.textItem}>- Express</Text>
                <Text style={styles.textItem}>- Sequelize</Text>
                <Text style={styles.textItem}>- JWT Auth</Text>
                <Text style={styles.textItem}>- React Storybook</Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.textHeading}>
                  Created by Atul Yadav
                </Text>

                <Text style={styles.textItem}>- github.com/atulmy</Text>
                <Text style={styles.textItem}>- twitter.com/atulmy</Text>
              </View>

              <Button
                title={'View Source Code on Github'}
                iconRight={'open-in-new'}
                onPress={this.github}
                theme={'secondary'}
              />
            </View>
          </ScrollView>
        </Body>

        <NavigationBottom />
      </View>
    )
  }
}
