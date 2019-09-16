import React from 'react';

const AddOther = ({ addOther }) => {
    return (
        <p className="text-left my-1 mx-0 d-inline">
            or
            <span className="btn text-muted font-weight-bold" onClick={() => addOther()}>Add other</span>
        </p>
    );
}

export default AddOther;