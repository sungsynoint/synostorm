import React, { Component } from 'react';
import uuid from "uuid/v4"
import PageHeader from './common/PageHeader';
import AddQuestion from './components/common/AddQuestion';
import Question from './Question';

class Questions extends Component {
    state = {
        questions: [
            <Question key={uuid()} id={uuid()} onDeleteQuestion={this.onDeleteQuestion} />
        ],
        pageClone: this.props.pageClone
    }


    onAddQuestion = () => {
        const questions = [...this.state.questions]
        const question = <Question
            key={uuid()}
            id={uuid()}
            questionState={this.state.questions}
            onDeleteQuestion={this.onDeleteQuestion}
        />
        questions.push(question)
        this.setState({ questions })
    }

    onDeleteQuestion = (value) => {
        console.log(value)
    }


    render() {

        const questions = this.state.questions
        const clonedQuestions = this.state.pageClone.map(clone => clone)


        return (<div>

            <PageHeader
                page={this.props.page}
                i={this.props.i}
                onClonePage={() => this.props.onClonePage(this.props.page.key, this.state.questions)}
                onDeletePage={this.props.onDeletePage}
            />
            <div className="card-body">
                {clonedQuestions.length >= 1 ? <div>  {clonedQuestions} </div> : <div> {questions} </div>}
            </div>
            <AddQuestion onAddQuestion={this.onAddQuestion} />
        </div>);
    }
}

export default Questions;