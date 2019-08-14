import React from 'react';


const RowInput = ({ onEnterLabel, }) => {
    return (

        <div className="form-row pb-1">
            <div className="col-1">
                <input type="text" name="number" className="form-control p-1" defaultValue=" "></input>
            </div>
            <div className="col-9">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter row label" onChange={(e) => onEnterLabel(e.target.value)} />
                </div>

            </div>
            <div className="col-2">
                <div className="button-list row">

                    <button className="btn btn-light border">
                        <i className="mdi mdi-table-row-remove"></i>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default RowInput;