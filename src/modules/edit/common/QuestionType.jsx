import React from 'react';


const QuestionType = ({ columns, setTitle }) => {
    return (
        <div className="row">

            <div className="col-7">
                <form>
                    <div className="form-group">
                        <input
                            onInput={(e) => setTitle(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Question Title"
                            style={{ border: "2px dashed #eeeff5" }}
                        />
                    </div>
                </form>
            </div>

            <div className="col-5 pl-1">
                <form onChange={e => console.log(e.target)}>
                    <select id="inputState" className="form-control" style={{ border: "2px dashed #eeeff5" }}>
                        <option>Question Type:</option>
                        {columns.map(column => <option value={column.label} key={column.label}>{column.label}</option>
                        )}
                    </select>
                </form>
            </div>
        </div>
    )

}




export default QuestionType;