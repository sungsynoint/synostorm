import React from 'react';
import QuestionType from './components/QuestionType';


const Pages = () => {

    const columns = [
        {
            icon: "mdi mdi-matrix",
            label: "Matrix (Custom)"
        }, {
            icon: "mdi mdi-apple-keyboard-option",
            label: "Matrix (10)"
        },

        {
            icon: "mdi mdi-emoticon-cool",
            label: "Satisfaction Matrix"
        },
        {
            icon: "mdi mdi-checkbox-multiple-blank-circle",
            label: "Matrix Multiple"
        },
        {
            icon: "mdi mdi-format-list-bulleted",
            label: "Dropdown List"
        },
        {
            icon: "mdi mdi-format-list-bulleted",
            label: "Double Dropdown List"
        },
        {
            icon: "mdi mdi-calendar-multiselect",
            label: "Date"
        },
        {
            icon: "mdi mdi-radiobox-marked",
            label: "Radio List"
        },
        {
            icon: "mdi mdi-tent",
            label: "Multiple choices"
        },
        {
            icon: "mdi mdi-radiobox-marked",
            label: "Multiple short text"
        },
        {
            icon: "mdi mdi-nfc-variant",
            label: "Multiple numerical input"
        },
        {
            icon: "mdi mdi-ninja",
            label: "Long free text"
        },
        {
            icon: "mdi mdi-blur",
            label: "Short free text"
        },
        {
            icon: "mdi mdi-blur-linear",
            label: "Numerical input"
        },
        {
            icon: "mdi mdi-brain",
            label: "Text display"
        },
        {
            icon: "mdi mdi-clipboard-text-play",
            label: "Screen out"
        },
        {
            icon: "mdi mdi-shield-key-outline",
            label: "Quota full"
        },
        {
            icon: "mdi mdi-alien",
            label: "Ranking"
        },
    ]



    return (
        <div className="card" style={{ border: "2px dashed #eeeff5" }}>
            <div className="card-body">
                <h4 className="header-title mb-4">Page 1</h4>
                <form className="container">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter question title" style={{ border: "2px dashed #eeeff5" }} />
                    </div>
                </form>

                <div className="card shadow-none">
                    <div className="card-body">
                        <h5 className="card-title mb-3">Question Type:</h5>
                        <div className="row">
                            <QuestionType columns={columns} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Pages;