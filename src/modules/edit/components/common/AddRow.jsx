import React from 'react';


const AddRow = ({ onAddRow }) => {
    return (
        <span className="btn-block text-center my-2" onClick={(e) => onAddRow(e)}>
            <i className="mdi mdi-plus-circle-outline mdi mdi-plus-circle-outline mr-2"></i>
            Add another row
        </span>
    );
}

export default AddRow;