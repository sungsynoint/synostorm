import React from 'react';


const QuestionType = ({ questions, setTitle, renderQuestion }) => {

    return (
        <div className="row">
            <div className="col-7">
                <form >
                    <div className="form-group">
                        <input
                            onInput={(e) => setTitle(e.target.value)}
                            className="form-control font-weight-bold"
                            placeholder="Question Title"
                            style={{ border: "2px dashed #eeeff5", }}
                        />
                    </div>
                </form>
            </div>
            <div className="col-5 pl-1">
                <select onChange={e => renderQuestion(e.target.value)} className="form-control" style={{ border: "2px dashed #eeeff5" }} >
                    <option>Question Type:</option>
                    {questions.map(option => <option value={option.label} key={option.label}>{option.label}</option>
                    )}
                </select>
            </div>
        </div>
    )
}


export default QuestionType;