import React from 'react';


const AddRow = ({ onAddRow }) => {
    return (
        <p className="text-muted btn text-left my-1 pl-1" onClick={(e) => onAddRow(e)}>
            <i className="mdi mdi-table-row-plus-after mr-4" />
            Add row
        </p>
    );
}

export default AddRow;