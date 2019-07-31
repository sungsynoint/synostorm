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
            label: "Satisfaction matrix"
        },
        {
            icon: "mdi mdi-checkbox-multiple-blank-circle",
            label: "Matrix multiple"
        },
        {
            icon: "mdi mdi-format-list-bulleted",
            label: "Dropdown list"
        },
        {
            icon: "mdi mdi-format-list-bulleted",
            label: "Double dropdown list"
        },
        {
            icon: "mdi mdi-calendar-multiselect",
            label: "Date"
        },
        {
            icon: "mdi mdi-radiobox-marked",
            label: "Radio list"
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
            icon: "mdi mdi-pokeball",
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
                <div className="row">
                    <div className="col-8">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Question Title" style={{ border: "2px dashed #eeeff5" }} />
                            </div>
                        </form>
                    </div>
                    <QuestionType columns={columns} />
                </div>

            </div>

        </div>
    );
}

export default Pages;