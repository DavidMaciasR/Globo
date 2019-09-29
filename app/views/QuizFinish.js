import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export class Finish extends React.Component {
  static navigationOptions = {
    header: null
  };

  exitQuiz = () => {
    this.props.navigation.navigate('HomeRT');
  };

  render() {
    let userScore = this.props.navigation.getParam('score', 'Error');
    let questionsMissed = this.props.navigation.getParam('missed', 'Error');
    let totalQuestions = this.props.navigation.getParam('questions', 'Error');
    return (
      <View style={styles.container}>
        <Text>Your quiz score was {userScore}</Text>
        <Text>
          You missed on {questionsMissed} out of {totalQuestions}
        </Text>

        <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
          <Text>Finish quiz</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%'
  }
});
