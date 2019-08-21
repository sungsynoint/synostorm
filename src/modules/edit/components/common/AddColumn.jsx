import React from 'react';


const AddColumn = ({ onAddColumn }) => {
    return (
        <p className="text-muted btn text-left my-1 pl-1" onClick={(e) => onAddColumn(e)}>
            <i className="mdi mdi-table-column-plus-after mr-4" />
            Add column
        </p>
    );
}

export default AddColumn;