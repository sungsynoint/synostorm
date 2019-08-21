import React from 'react';


const TextArea = ({ onQuickAdd, label }) => {
    return (<div className="col-5">
        <div className="row">
            <div className="col-12 pl-1">
                <div className="form-group mb-3">
                    <textarea
                        className="form-control"
                        id="textareabox"
                        onChange={(e) => onQuickAdd(e.target.value)}
                        rows="3" placeholder={label}
                        style={{ height: " 150px" }}
                    />
                </div>
            </div>
        </div>
    </div>);
}

export default TextArea;