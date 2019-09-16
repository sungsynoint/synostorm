import React, { Component } from 'react';
import uuid from "uuid/v4"
import QuestionHeader from './common/QuestionHeader';
import AddQuestion from './components/common/AddQuestion';
import Question from './Question';


class Questions extends Component {
    state = {
        questions: [
            <Question
                key={uuid()}
            />
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
        console.log(questions);
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
            <div className="row card-body collapse show" id="questions" key={question.key}>

                <div className="col-1 px-1">
                    <div className="mx-2">
                        <p className="text-dark mt-0 mb-0 font-13">
                            Q{i + 1}
                        </p>

                        <span className="card-subtitle text-muted" style={{ fontSize: "11px" }}>
                            {question.key.toString().substring(0, 8)}
                        </span>
                    </div>
                </div>
                <div className="col-10">
                    {question}
                </div>
                <div className="col-1 table m-0 px-1">
                    <div className="table-action py-0 border-0 p-0" >
                        <span className="action-icon btn font-15" onClick={() => this.onCloneQuestion(question)}>
                            <i className="mdi mdi-file-multiple"></i>
                        </span>
                        <span className="action-icon btn" onClick={() => this.onDeleteQuestion(question)}>
                            <i className="mdi mdi-delete"></i>
                        </span>
                    </div>
                </div>
            </div>
        )

        const renderCloneQuestion = this.state.pageClone.map((qclone, i) =>
            <div className="row card-body collapse show" id="questions" key={qclone.key}>
                <div className="col-1">
                    <div className="mx-2">
                        <p className="text-dark mt-0 mb-0 font-13">
                            Q{i + 1}
                        </p>
                        <span className="card-subtitle text-muted" style={{ fontSize: "11px" }}>
                            {qclone.key.toString().substring(0, 8)}
                        </span>
                    </div>
                </div>
                <div className="col-10">
                    {qclone}
                </div>
                <div className="col-1 table m-0">
                    <div className="table-action py-0 border-0 p-0" >
                        <span className="action-icon btn font-15" onClick={() => this.onCloneQuestion(qclone)}> <i className="mdi mdi-file-multiple"></i></span>
                        <span className="action-icon btn" onClick={() => this.onDeleteQuestion(qclone)}> <i className="mdi mdi-delete"></i></span>
                    </div>
                </div>
            </div>
        )

        return (<div>
            <QuestionHeader
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