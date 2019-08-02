import React, { Component } from 'react';
import QuestionType from './common/QuestionType';
import MatrixCustom from "./components/MatrixCustom"


class Pages extends Component {
    state = {
        title: ""
    }

    render() {

        const columns = [
            {
                label: "Matrix (Custom)"
            }, {
                label: "Matrix (10)"
            },

            {
                label: "Satisfaction matrix"
            },
            {
                label: "Matrix multiple"
            },
            {
                label: "Dropdown list"
            },
            {
                label: "Double dropdown list"
            },
            {
                label: "Date"
            },
            {
                label: "Radio list"
            },
            {
                label: "Multiple choices"
            },
            {
                label: "Multiple short text"
            },
            {
                label: "Multiple numerical input"
            },
            {
                label: "Long free text"
            },
            {
                label: "Short free text"
            },
            {
                label: "Numerical input"
            },
            {
                label: "Text display"
            },
            {
                label: "Screen out"
            },
            {
                label: "Quota full"
            },
            {
                label: "Ranking"
            },
        ]


        const setTitle = (value) => {
            const title = this.state;
            title.title = value.toLowerCase();
            this.setState({ title })
            console.log(this.state.title)
        }


        return (
            <div className="card" style={{ border: "2px dashed #eeeff5" }}>
                <div className="card-body">
                    <h4 className="header-title mb-4">Page 1</h4>
                    <QuestionType columns={columns} setTitle={setTitle} />
                    <MatrixCustom />
                </div>
            </div>
        );
    }
}

export default Pages;