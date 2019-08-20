import React, { Component } from 'react';
import Question from './Question';
import uuid from "uuid/v4"
import AddQuestion from './components/common/AddQuestion';

class Questions extends Component {
    state = {}

    componentWillMount() {
        this.setState({ questions: [<Question key={uuid()} />] })
    }

    render() {

        const onAddQuestion = () => {
            const questions = [...this.state.questions]
            const question = <Question key={uuid()} />
            questions.push(question)
            this.setState({ questions })
        }

        return (
            <React.Fragment>
                <div className="card-body">
                    {this.state.questions}
                </div>
                <AddQuestion onAddQuestion={onAddQuestion} />
            </React.Fragment>
        );
    }
}

export default Questions;