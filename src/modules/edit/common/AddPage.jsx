import React from 'react';


const AddPage = ({ onAddPage }) => <div className="col-12 mt-2">
    <button className="btn btn-light btn-block border" onClick={onAddPage}>
        Add page
</button>
</div>

export default AddPage;