import React from 'react';

const QuestionOption = ({ questions, getOption }) => {
    return (
        <div className="row my-3">
            <div className="col-6">
                <form >
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Question title"
                            style={{ border: "2px dashed rgb(238, 239, 245)" }}

                        />
                    </div>
                </form>
            </div>
            <div className="col-6">
                <select onChange={e => getOption(e.target.value)} className="form-control" style={{ border: "2px dashed #eeeff5" }} >
                    <option>Question Type:</option>
                    {questions.map(question => {
                        return (
                            <optgroup label={question.type} key={question.type}>
                                {question.question.map(option => {
                                    return <option value={option.label} key={option.label}>{option.label}</option>
                                })}
                            </optgroup>
                        )
                    })}
                </select>
            </div>

        </div>
    )


}

export default QuestionOption;