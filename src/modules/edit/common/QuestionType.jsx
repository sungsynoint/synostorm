import React from 'react';

const QuestionType = ({ questionState, id, questions, setTitle, renderQuestion }) => {


    return (
        <div className="row my-3">
            <div className="col-0">
                <div className="mx-2">
                    <p className="text-dark mt-0 mb-0 font-13">
                        Q{questionState === undefined ? "1" : questionState.length + 1}
                    </p>
                    <span className="card-subtitle text-muted" style={{ fontSize: "11px" }}>
                        {id.toString().substring(0, 8)}
                    </span>
                </div>
            </div>

            <div className="col-7">
                <form >
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Question title"
                            style={{ border: "2px dashed rgb(238, 239, 245)" }}
                            onInput={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <div className="col-4">
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