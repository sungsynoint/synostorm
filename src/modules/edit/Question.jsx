import React, { Component } from "react";
import QuestionType from './common/QuestionType';
import MatrixCustom from "./components/MatrixCustom";
import FreeText from "./components/FreeText";
import SatisfactionMatrix from "./components/SatisfactionMatrix";
import Dropdown from "./components/Dropdown";
import Date from "./components/Date";


class Question extends Component {
    state = {
        question: []
    }

    questions = [
        {
            label: "Matrix (Custom)",
            content: <MatrixCustom />
        },
        {
            label: "Satisfaction matrix",
            content: <SatisfactionMatrix />
        },
        {
            label: "Matrix multiple",
            content: <MatrixCustom />
        },
        {
            label: "Dropdown list",
            content: <Dropdown />
        },
        {
            label: "Date",
            content: <Date />
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
            label: "Ranking",
            content: <MatrixCustom />
        },
    ]



    render() {

        const setTitle = (value) => {
            console.log(value)
        }

        const renderQuestion = (value) => {
            try {
                const questions = this.questions.find(question => question.label === value);
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

        const getQuestion = () => this.state.question.find(question => question);

        return (
            <div>
                <QuestionType questions={this.questions} setTitle={setTitle} renderQuestion={renderQuestion} />
                {getQuestion()}
            </div>
        )
    }
}

export default Question;