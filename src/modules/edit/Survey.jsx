import React, { Component } from 'react';
import { getSurveys } from "../../localStorage"
import NavBar from "./common/NavBar"
import SurveyStatus from "./common/SurveyStatus"
import Page from './Page';

class EditSurvey extends Component {
    state = {
        pages: [<Page />]
    }

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

        const onAddPage = () => {
            const pages = this.state.pages;
            const page = <Page />
            pages.push(page)
            this.setState(pages)
        }

        console.log(this.state.pages)
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <NavBar />
                        <SurveyStatus survey={survey} badges={badges} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-2">
                        {this.state.pages.map(page => {
                            return page
                        })}
                    </div>
                    <div className="col-12 mt-2">
                        <button className="btn btn-light btn-block border" onClick={onAddPage}>Add page</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditSurvey;