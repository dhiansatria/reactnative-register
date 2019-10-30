import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Alert,
  Button
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      UserName: '',
      UserEmail: '',
      UserPassword: ''
    }
  }

  // function proses registrasi

  userRegistrationFunction = () => {
    const { UserName } = this.state
    const { UserEmail } = this.state
    const { UserPassword } = this.state

    fetch('http://17.17.17.104/my-react/user_registration.php', {
      method: 'POST',
      Header: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: UserName,
        email: UserEmail,
        password: UserPassword
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        Alert.alert(responseJson)
      })
      .catch(error => {
        console.error(error)
      });
  }

  render () {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            color: '#000000',
            textAlign: 'center',
            marginBottom: 16,
          }}>
          User Registration Form
          </Text>

          <TextInput
            placeholder='Tuliskan Username'
            onChangeText={UserName => this.setState({ UserName })}
          />
          <TextInput
            placeholder='Tuliskan Email'
            onChangeText={UserEmail => this.setState({ UserEmail })}
          />
          <TextInput
            placeholder='Tuliskan Password'
            onChangeText={UserPassword => this.setState({ UserPassword })}
          />
        

        <Button
          title="Register"
          onPress={this.userRegistrationFunction}
          color="2134ef"
        />
      </View>
    );
  }
};
