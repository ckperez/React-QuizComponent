import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  handleClick (buttonText) {
    this.props.quiz_question.answer === buttonText && this.props.showNextQuestionHandler()
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section>
          <ul>
            {this.props.quiz_question.answer_options.map( (o, i) => {
              return <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={i} button_text={o}/>
            })}
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion