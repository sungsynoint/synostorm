import React from "react";
import QuestionType from './common/QuestionType';
import QuestionComponents from "./common/QuestionsComponent";


class Question extends QuestionComponents {
    state = {
        question: []
    }


    render() {

        const setTitle = (value) => {
            console.log(value)
        }

        const renderQuestion = (value) => {

            const hakunaMatata = () => {
                const questions = this.questions;
                questions.forEach(question => {
                    const ahua = question.question.find(question => question.label === value)
                    aWayToLive(ahua)
                })
            }

            const aWayToLive = (question) => {
                try {
                    const questions = question
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
            hakunaMatata()
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