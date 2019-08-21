import React from 'react';


const AddPage = ({ onAddPage }) => <div className="col-12 mt-2 p-0" style={{ border: "2px dashed #eeeff5" }}>
    <button className="btn-block btn btn-light card-footer text-center" onClick={onAddPage}>
        Add page
    </button>
</div>

export default AddPage;