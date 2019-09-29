import { Alert, AsyncStorage, View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

import React from 'react';

export class Register extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirm: ''
    };
  }

  cancelRegistration = () => {
    Alert.alert('Registration cancelled');
    this.props.navigation.navigate('HomeRT');
  };

  registerAccount = () => {
    if (!this.state.username) {
      Alert.alert('Please enter an username');
    } else if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert('Passwords do not match');
    } else {
      AsyncStorage.getItem(this.state.username, (err, result) => {
        if (result != null) {
          Alert.alert(`${this.state.username} already exists`);
        } else {
          AsyncStorage.setItem(this.state.username, this.state.password, (err, result) => {
            Alert.alert(`${this.state.username} account created`);
            this.props.navigation.navigate('HomeRT');
          });
        }
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Register account</Text>
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

        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ passwordConfirm: text })}
          value={this.passwordConfirm}
          secureTextEntry={true}
        ></TextInput>
        <Text style={styles.label}>Enter password confirm</Text>

        <TouchableHighlight onPress={this.registerAccount} underlayColor="#31e981">
          <Text style={styles.buttons}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.cancelRegistration} underlayColor="#31e981">
          <Text style={styles.buttons}>Cancel registration</Text>
        </TouchableHighlight>
      </View>
    );
  }
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
