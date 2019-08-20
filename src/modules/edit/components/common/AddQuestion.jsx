import React from 'react';


const AddQuestion = ({ onAddQuestion }) => {
    return (<button className="btn-block btn btn-light card-footer text-center" onClick={() => onAddQuestion()}>
        <span className="text-muted" >
            Add question
    </span>
    </button>);
}

export default AddQuestion;