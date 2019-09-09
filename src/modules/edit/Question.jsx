import React from "react";
import QuestionType from './common/QuestionType';
import QuestionComponents from "./common/QuestionsComponent";


class Question extends QuestionComponents {
    state = {
        question: []
    }


    getOption = (value) => {

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

    render() {

        console.log(this.state.question)

        const GetQuestion = () => {
            const question = this.state.question.find(question => question)
            return question ? question : ""
        }


        return (
            <div>
                <div className="col-12">
                    <QuestionType
                        questions={this.questions}
                        getOption={this.getOption}
                        questionState={this.props.questionState}
                        index={this.props.index}
                        onDeleteQuestion={this.props.onDeleteQuestion}
                        question={this.props.question}
                    />
                    <GetQuestion />
                </div>

            </div>

        )
    }
}

export default Question;