import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableHead from "./componets/TableHead"
import TableBody from "./componets/TableBody"


class Table extends Component {

    columns = [
        {
            label: "",
            key: "checkbox",
            content: survey => <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    id={survey.id}
                    className="custom-control-input"
                    onChange={(e) => this.props.surveyCheck(e.target.checked, survey)}
                />
                <label className="custom-control-label" htmlFor={survey.id}></label>
            </div>
        },
        {
            label: "Status",
            key: "status",
            content: (survey) => {
                if (survey.status === "closed") {
                    return <span className="badge badge-dark">Closed</span>
                } else if (survey.status === "open") {
                    return <span className="badge badge-success">Open</span>

                } else {
                    return <span className="badge badge-warning text-white">Draft</span>
                }
            }
        }, {
            label: "Title",
            path: "title",
            content: (survey) => <Link to={`/edit-survey#${survey.id}`}>
                <span className="border-0" key={survey.id}>
                    {survey.title}
                </span>
            </Link>
        },
        {
            label: "Id",
            path: "id".toString().substring(0, 2),

        }, {
            label: "User",
            path: "user"
        }, {
            label: "Completes",
            path: "completes"
        }, {
            label: "Language",
            path: "language"
        }, {
            label: "Edited",
            path: "edited",
        }
    ]

    render() {


        const { surveys } = this.props;
        return (
            <div>
                <table className="table table-hover table-centered mb-0">
                    <TableHead columns={this.columns} />
                    <TableBody columns={this.columns} surveys={surveys} />
                </table>
            </div>
        );
    }
}

export default Table;



