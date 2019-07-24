import React, { Component } from "react";
import NavBar from "./componets/NavBar";
import TableHead from "./componets/TableHead"
import TableBody from "./componets/TableBody"


class Table extends Component {
    render() {
        const { surveys, deleteSurvey } = this.props
        const surveyCheck = (checked, survey) => {
            console.log(survey)
            this.setState({
                checked
            })
        };

        return (
            <div>
                <NavBar checked={this.state} surveys={this.state} deleteSurvey={deleteSurvey} />
                <table className="table table-hover table-centered mb-0">
                    <TableHead />
                    <TableBody surveys={surveys} surveyCheck={surveyCheck} />
                </table>
            </div>
        );
    }
}

export default Table;
