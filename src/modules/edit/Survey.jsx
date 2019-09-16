import React, { Component } from 'react';
import { getSurveys } from "../../localStorage"
import SurveyStatus from "./common/SurveyStatus"
import NavBar from "./common/TabBar"
import Pages from './Pages';
import LeftMenu from "../common/leftMenu"


class Survey extends Component {

    render() {
        const hash = window.location.hash.toString().substring(1)
        const survey = getSurveys().find(survey => survey.id === hash);

        if (survey === undefined) {
            window.location = "/not-found"
        }

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
            <div>
                <LeftMenu />
                <div className="content-page">
                    <div className="content container-fluid">
                        <div className="row mt-3">
                            <div className="col-12">
                                <NavBar />
                                <SurveyStatus survey={survey} badges={badges} />

                            </div>
                            <div className="col-12 float-right button-list text-right">
                                <button
                                    href="#questions"
                                    aria-controls="#questions"
                                    type="button"
                                    className="btn btn-icon btn-light border btn-sm"
                                    data-toggle="collapse"
                                    aria-expanded="true"
                                >
                                    <i className="mdi mdi-arrow-expand"></i>
                                </button>
                                <button type="button" className="btn btn-icon btn-danger btn-sm" disabled>
                                    <i className="mdi mdi-window-close"></i>
                                </button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Pages />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Survey;