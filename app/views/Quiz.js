import React from 'react';
import { QuizData } from '../data/QuizQuestions';

import { View, FlatList, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { Question } from '../sections/Questions';

export class Quiz extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      questLoaded: false,
      totalScore: 100,
      completedQuiz: false
    };
  }

  componentDidMount() {
    let numQuestions = Array.from(QuizData.questions).length;

    this.setState({
      questList: Array.from(QuizData.questions),
      questLoaded: true,
      numQuestions,
      incorrect: 0,
      questionsAnswered: 0
    });
  }

  updateScore = penalty => {
    let tempScore = this.state.totalScore;
    let missed = this.state.incorrect;
    let numQuestions = this.state.numQuestions;
    let questionsAnswered = this.state.questionsAnswered;

    let newScore = tempScore - penalty;
    let totalAnswered = questionsAnswered + 1;
    let totalMissed = penalty ? missed + 1 : missed;

    this.setState({
      totalScore: newScore,
      incorrect: totalMissed,
      questionsAnswered: totalAnswered
    });

    if (totalAnswered === numQuestions) {
      this.setState({ completedQuiz: true });
    }
  };

  finishQuiz = () => {
    this.props.navigation.navigate('FinishRT', {
      score: this.state.totalScore,
      missed: this.state.incorrect,
      questions: this.state.numQuestions
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.questLoaded && (
          <FlatList
            data={this.state.questList}
            renderItem={({ item }) => (
              <Question
                question={item.question}
                answer1={item.answer1}
                answer2={item.answer2}
                answer3={item.answer3}
                correctAnswer={item.correctAnswer}
                scoreUpdate={this.updateScore}
              />
            )}
          />
        )}

        {!this.state.completedQuiz && (
          <TouchableHighlight style={styles.disabled}>
            <Text>Answer all the questions</Text>
          </TouchableHighlight>
        )}
        {this.state.completedQuiz && (
          <TouchableHighlight onPress={this.finishQuiz} style={styles.enabled}>
            <Text>Quiz finished</Text>
          </TouchableHighlight>
        )}
        {!this.state.questLoaded && <Text>LOADING</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },

  disabled: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    height: '10%'
  },
  enabled: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90ee90',
    height: '10%'
  }
});
