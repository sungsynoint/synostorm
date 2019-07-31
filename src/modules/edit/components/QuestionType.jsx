import React from 'react';


const QuestionType = ({ columns }) => {

    return (
        <div className="col-4">
            <select id="inputState" className="form-control" style={{ border: "2px dashed #eeeff5" }}>
                <option>Question Type:</option>
                {columns.map(column => <option value="" key={column.label}>{column.label} </option>
                )}
            </select>
        </div>


    )

}




export default QuestionType;