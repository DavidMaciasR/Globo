import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export class Menu extends React.Component {
  onPress = () => {
    Alert.alert('You tapped the button! ');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => this.props.navigate('LessonsRT')}
          >
            <Text style={styles.buttonText}>LESSONS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => this.props.navigate('RegistrationRT')}
          >
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => this.props.navigate('BlogRT')}
          >
            <Text style={styles.buttonText}>BLOG</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => this.props.navigate('ContactRT')}
          >
            <Text style={styles.buttonText}>CONTACT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => this.props.navigate('QuizRT')}
          >
            <Text style={styles.buttonText}>QUIZ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('AboutRT')}>
            <Text style={styles.buttonText}>ABOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#35605a'
  },
  buttonRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderBottomWidth: 1
  },
  buttonStyles: {
    backgroundColor: '#35605a',
    height: '50%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18
  }
});