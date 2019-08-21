import React from 'react';


const AddRow = ({ onAddRow, label, icon }) => {
    return (
        <p className="text-muted btn text-left my-1 pl-1" onClick={(e) => onAddRow(e)}>
            <i className={`mdi ${icon} mr-4`} />
            {label}
        </p>
    );
}



export default AddRow;