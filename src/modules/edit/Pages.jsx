import React, { Component } from 'react';
import QuestionType from './common/QuestionType';
import MatrixCustom from "./components/MatrixCustom"


class Pages extends Component {
    state = {
        questions: [
            {
                label: "Matrix (Custom)",
                content: <MatrixCustom />
            },
            {
                label: "Matrix (10)",
                content: <p>aua</p>
            },
            {
                label: "Satisfaction matrix",
                content: <MatrixCustom />
            },
            {
                label: "Matrix multiple",
                content: <MatrixCustom />
            },
            {
                label: "Dropdown list",
                content: <MatrixCustom />
            },
            {
                label: "Double dropdown list",
                content: <MatrixCustom />
            },
            {
                label: "Date",
                content: <MatrixCustom />
            },
            {
                label: "Radio list",
                content: <MatrixCustom />
            },
            {
                label: "Multiple choices",
                content: <MatrixCustom />
            },
            {
                label: "Multiple short text",
                content: <MatrixCustom />
            },
            {
                label: "Multiple numerical input",
                content: <MatrixCustom />
            },
            {
                label: "Long free text",
                content: <MatrixCustom />
            },
            {
                label: "Short free text",
                content: <MatrixCustom />
            },
            {
                label: "Numerical input",
                content: <MatrixCustom />
            },
            {
                label: "Text display",
                content: <MatrixCustom />
            },
            {
                label: "Screen out",
                content: <MatrixCustom />
            },
            {
                label: "Quota full",
                content: <MatrixCustom />
            },
            {
                label: "Ranking",
                content: <MatrixCustom />
            },
        ],
    }

    render() {

        const setTitle = (value) => {
            console.log(value)
        }

        const RenderQuestion = (value) => {

            try {
                const questions = this.state.questions.find(question => question.label === value);
                if (questions) {
                    this.setState({ renderQuestion: questions.content })
                    console.log(this.state.renderQuestion)
                } else {
                    throw new Error("You must select a question")
                }
            } catch (e) {
                this.setState({ error: e.message })
            }

        }

        return (
            <div className="card" style={{ border: "2px dashed #eeeff5" }}>
                <div className="card-body">
                    <textarea className="header-title mb-4 h4" style={{ resize: "none", border: "0px" }} defaultValue="Page 1" />
                    <QuestionType questions={this.state.questions} setTitle={setTitle} RenderQuestion={RenderQuestion} />
                    {this.state.renderQuestion}

                </div>
            </div>
        );
    }
}

export default Pages;