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
        pageClone: this.props.pageClone,
        questionClone: []
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
        const questions = this.state.questions.filter(question => question.key !== value.key)
        this.setState({ questions })
    }

    onCloneQuestion = (value) => {
        const questions = this.state.questions;
        let question = questions.find(question => question.key === value.key)
        const questionRef = { ...question }
        if (question) {
            questionRef.label = "Copy"
            questionRef.key = question.key + 1
            questions.push(questionRef)
            let questionClone = [...this.state.questionClone]
            questionClone = ["array"]
            this.setState({ questions, questionClone })
        }
    }


    render() {

        const renderQuestion = this.state.questions.map((question, i) =>
            <Question
                key={uuid()}
                index={i}
                questionState={this.state.questions}
                onDeleteQuestion={this.onDeleteQuestion}
                onCloneQuestion={this.onCloneQuestion}
                question={question}
            />
        )

        const renderCloneQuestion = this.state.pageClone.map((qclone, i) =>
            <Question
                key={uuid()}
                index={i}
                questionState={this.state.questions}
                onDeleteQuestion={this.onDeleteQuestion}
                onCloneQuestion={this.onCloneQuestion}
                question={qclone}
            />
        )

        return (<div>
            <PageHeader
                page={this.props.page}
                i={this.props.i}
                onClonePage={() => this.props.onClonePage(this.props.page.key, this.state.questions)}
                onDeletePage={this.props.onDeletePage}
            />
            <div className="card-body collapse show" id={`page${this.props.page.key}`}>
                {renderCloneQuestion.length > 1 ? renderCloneQuestion : renderQuestion}
            </div>
            <AddQuestion onAddQuestion={this.onAddQuestion} />
        </div>);
    }
}

export default Questions;