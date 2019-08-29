import React, { Component } from 'react';
import uuid from "uuid/v4"
import Question from './Question';
import AddQuestion from './components/common/AddQuestion';


class Questions extends Component {
    state = {
        questions: [<Question key={uuid()} id={uuid()} />]
    }



    render() {
        const onAddQuestion = () => {
            const questions = [...this.state.questions]
            const question = <Question key={uuid()} id={uuid()} questionState={this.state.questions} />
            questions.push(question)
            this.setState({ questions })
        }

        const { id } = this.props

        return (

            <div>
                <div id={id} className="collapse show">
                    <div className="card-body px-5 pt-0">
                        {this.state.questions}
                    </div>
                    <div className="mt-1">
                        <AddQuestion onAddQuestion={onAddQuestion} questionState={this.state.questions} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Questions;