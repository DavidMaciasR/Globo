import React from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableHighlight } from 'react-native';
import { Header } from '../sections/Header';

export class Contact extends React.Component {
  static nativationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      msg: 'Enter message',
      name: 'Enter name',
      email: 'Enter your Email address'
    };
  }

  clearFields = () => this.setState({ name: '', msg: '', email: '' });

  sendMessage = () => {
    Alert.alert(this.state.name, this.state.msg);
    this.props.navigation.goBack();
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header navigate={navigate} message="Press to login"></Header>
        <Text style={styles.heading}>Contact Us</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
        ></TextInput>
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
          multiline={true}
          numberOfLines={4}
        ></TextInput>
        <TouchableHighlight onPress={this.sendMessage} underlayColor="#31e981">
          <Text style={styles.buttons}>Send message</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.clearFields} underlayColor="#31e981">
          <Text style={styles.buttons}>Reset form</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%'
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
  }
});
