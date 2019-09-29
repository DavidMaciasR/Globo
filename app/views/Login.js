import React from 'react';

import { Alert, AsyncStorage, View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

export class Login extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  cancelLogin = () => {
    Alert.alert('Login cancelled');
    this.props.navigation.navigate('HomeRT');
  };

  loginUser = () => {
    if (!this.state.username) {
      Alert.alert('No username was provided');
    } else if (!this.state.password) {
      Alert.alert('No password entered ');
    } else {
      AsyncStorage.getItem('userLoggedIn', (err, result) => {
        if (result !== 'none') {
          Alert.alert('Somebody is already logged on');

          this.props.navigation.navigate('HomeRT');
        } else {
          AsyncStorage.getItem(this.state.username, (err, result) => {
            if (result !== null) {
              if (result !== this.state.password) {
                Alert.alert('Password incorrect');
              } else {
                AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result) => {
                  Alert.alert(`${this.state.username} Logged in`);
                  this.props.navigation.navigate('HomeRT');
                });
              }
            } else {
              Alert.alert(`No account for ${this.state.username}`);
            }
          });
        }
      });
    }
  };

  render = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ username: text })}
          value={this.username}
        ></TextInput>
        <Text style={styles.label}>Enter username</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ password: text })}
          value={this.password}
          secureTextEntry={true}
        ></TextInput>
        <Text style={styles.label}>Enter password</Text>

        <TouchableHighlight onPress={this.loginUser} underlayColor="#31e981">
          <Text style={styles.buttons}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.cancelLogin} underlayColor="#31e981">
          <Text style={styles.buttons}>Cancel login</Text>
        </TouchableHighlight>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%',
    paddingTop: '10%'
  },
  heading: {
    fontSize: 16,
    flex: 1
  },
  inputs: {
    flex: 1,
    width: '80%',
    padding: 10
  },
  multiInput: {
    flex: 2,
    width: '90%',
    paddingTop: 20
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  },
  labels: {
    paddingBottom: 10
  }
});
