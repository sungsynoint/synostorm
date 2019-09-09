import React from 'react';

const QuestionType = ({ question, questions, setTitle, getOption, onDeleteQuestion, index }) => {

    return (
        <div className="row my-3">
            <div className="col-1">
                <div className="mx-2">
                    <p className="text-dark mt-0 mb-0 font-13">
                        Q{index + 1}
                    </p>
                    <span className="card-subtitle text-muted" style={{ fontSize: "11px" }}>
                        {question.key.toString().substring(0, 8)}
                    </span>
                </div>
            </div>

            <div className="col-6">
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
            <div className="col-1 table m-0" >
                <div className="table-action py-0 border-0 p-0" >
                    <span className="action-icon btn font-15" > <i className="mdi mdi-file-multiple"></i></span>
                    <span className="action-icon btn" onClick={() => onDeleteQuestion(question)}> <i className="mdi mdi-delete"></i></span>
                </div>

            </div>
        </div>
    )


}


export default QuestionType;