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
        const questions = this.state.questions.filter(question => question.key !== value.key)
        this.setState({ questions })
    }

    render() {
        const renderQuestion = this.state.questions.map((question, i) =>
            <Question
                key={uuid()}
                index={i}
                questionState={this.state.questions}
                onDeleteQuestion={this.onDeleteQuestion}
                question={question}
            />
        )

        const renderCloneQuestion = this.state.pageClone.map((qclone, i) =>
            <Question
                key={uuid()}
                index={i}
                questionState={this.state.questions}
                onDeleteQuestion={this.onDeleteQuestion}
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