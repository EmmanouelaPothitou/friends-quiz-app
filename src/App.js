import React, { Component } from 'react';
import './App.css';
import qBank from './Questions';
import QuestionBox from './components/questionBox.js'
import Result from './components/Result.js'
import frame from './images/frame.png'
import logo from './images/logo.png'
import cafe from './images/cafe.png'
import lobster from './images/lobster.png'
import how from './images/how.png'
import cat from './images/cat.png'
import turkey from './images/turkey.png'
import chick from './images/chick.png'
import hugsy from './images/hugsy.png'
import couch from './images/couch.png'


class MyQuiz extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };

  getQuestions = () => {
    qBank().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };

  computeAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
      this.setState(
        { score: this.state.score + 1 }
      )
    };
    this.setState(
      { responses: this.state.responses < 5 ? this.state.responses + 1 : 5 }
    );
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="App">
     
        <div className='frame'>
          <div className='title'>Friends' Quiz</div>
          {this.state.questionBank.length > 0 &&
            this.state.responses < 5 &&
            this.state.questionBank.map(({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={answer => this.computeAnswer(answer, correct)}
              />
            ))}

          {this.state.responses === 5 ?
            (<Result score={this.state.score} playAgain={this.playAgain} />)
            : null}
        </div>


        <div className="decorations">
          <div className="frames">
            <img src={frame} alt="frame" />
            <img src={turkey} alt="frame" />
          </div>
          <div className="lobsters">
            <img src={lobster} alt="frame" />
            <img src={logo} alt="frame" />
          </div>
          <div className="cafes">
            <img src={cafe} alt="frame" />
            <img src={couch} alt="frame" />
          </div>
          <div className="cat">
            <img src={cat} alt="frame" />
            <img src={chick} alt="frame" />
          </div>
          <div className="how">
            <img src={how} alt="frame" />
            <img src={hugsy} alt="frame" />
          </div>
        </div>

      </div>
    );
  }
}

export default MyQuiz;
