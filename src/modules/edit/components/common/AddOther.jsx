import React from 'react';

const AddOther = ({ addOther }) => {
    return (
        <p className="text-dark font-weight-bold btn text-left my-1 px-0 mx-0" onClick={(e) => addOther(e)}>
            or Add other
        </p>
    );
}

export default AddOther;