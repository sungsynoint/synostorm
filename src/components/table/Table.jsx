import React, { Component } from "react";
import TableHead from "./componets/TableHead"
import TableBody from "./componets/TableBody"


class Table extends Component {
    state = {}

    render() {
        const { surveys, surveyCheck } = this.props;
        return (
            <div>
                <table className="table table-hover table-centered mb-0">
                    <TableHead />
                    <TableBody surveys={surveys} surveyCheck={surveyCheck} />
                </table>
            </div>
        );
    }
}

export default Table;



