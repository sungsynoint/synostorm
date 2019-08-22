import React from 'react';


const QuestionType = ({ questions, setTitle, renderQuestion }) => {

    return (
        <div className="row my-3">

            <div className="col-7">
                <form >
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend">
                                <i className="mdi mdi-format-title"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Question Title"
                            style={{ border: "2px dashed rgb(238, 239, 245)" }}
                            onInput={(e) => setTitle(e.target.value)}
                        />
                    </div>


                </form>
            </div>
            <div className="col-5 pl-1">
                <select onChange={e => renderQuestion(e.target.value)} className="form-control" style={{ border: "2px dashed #eeeff5" }} >
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


export default QuestionType;