import React from "react";
import QuestionType from './common/QuestionType';
import QuestionComponents from "./common/QuestionsComponent";


class Question extends QuestionComponents {
    state = {
        question: []
    }


    render() {


        const renderQuestion = (value) => {

            const getQuestionComponent = () => {
                this.questions.forEach(question => {
                    const questionObj = question.question.find(question => question.label === value)
                    try {
                        const questions = questionObj
                        if (questions) {
                            const question = [questions.content]
                            this.setState({ question })
                        } else {
                            throw new Error("You must select a question")
                        }
                    } catch (e) {
                        this.setState({ error: e.message })
                    }
                })
            }
            getQuestionComponent()
        }

        const getQuestion = () => this.state.question.find(question => question);

        return (
            <div>
                <QuestionType questions={this.questions} renderQuestion={renderQuestion} />
                {getQuestion()}
            </div>
        )
    }
}

export default Question;