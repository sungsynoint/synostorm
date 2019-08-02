import React, { Component } from 'react';
import { getSurveys } from "../../localStorage"
import NavBar from "./common/NavBar"
import DropDown from "./common/DropDown"
import Pages from './Pages';

class EditSurvey extends Component {
    render() {

        const hash = window.location.hash.toString().substring(1)
        const survey = getSurveys().find(survey => survey.id === hash);

        const badges = () => {
            const styles = "small float-left "
            let badge = "mdi mdi-checkbox-blank-circle"

            if (survey.status === "open") {
                badge += " text-success"
            } else if (survey.status === "closed") {
                badge += " text-dark"
            } else {
                badge += " text-warning"
            }
            return styles + badge;
        }

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <NavBar />
                        <DropDown survey={survey} badges={badges} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Pages />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditSurvey;