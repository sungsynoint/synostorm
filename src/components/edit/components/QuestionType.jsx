import React from 'react';


const QuestionType = ({ columns }) => {
    return columns.map(column =>
        <div className="col-3" key={column.label}>
            <div className="card mb-1 border">
                <div className="p-2 btn">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <div className="avatar-sm">
                                <span className="avatar-title rounded" style={{ backgroundColor: "#90caf9" }}>
                                    <i className={column.icon}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col pl-0">
                            <p className="text-secondary font-weight-bold mb-0">{column.label}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}




export default QuestionType;