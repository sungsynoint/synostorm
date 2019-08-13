import React, { Component } from 'react';
import QuestionType from './common/QuestionType';
import AddPage from "./common/AddPage"
import MatrixCustom from "./components/MatrixCustom"
import FreeText from "./components/FreeText"

class Page extends Component {
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
                label: "Free text",
                content: <FreeText />
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
        question: []
    }

    render() {

        const setTitle = (value) => {
            console.log(value)
        }


        const renderQuestion = (value) => {
            try {
                const questions = this.state.questions.find(question => question.label === value);
                if (questions) {
                    const question = [questions.content]
                    this.setState({ question })
                } else {
                    throw new Error("You must select a question")
                }
            } catch (e) {
                this.setState({ error: e.message })
            }
        }

        const { onAddPage } = this.props;

        const getQuestion = () => this.state.question.find(question => question);


        return (
            <div>

                <div className="mb-3">
                    <div className="card" style={{ border: "2px dashed #eeeff5" }}>
                        <div className="card-body">
                            <textarea className="heaer-title mb-4 h4 w-100" style={{ resize: "none", border: "0px" }} defaultValue={`Page`} />
                            <QuestionType questions={this.state.questions} setTitle={setTitle} renderQuestion={renderQuestion} />
                            {this.state.renderQuestion}
                            {getQuestion()}
                        </div>
                    </div>
                    <AddPage onAddPage={onAddPage} />
                </div>

            </div>
        );
    }
}

export default Page;