import React, { Component } from 'react';
import { getSurveys } from "../../localStorage"
import NavBar from "./components/NavBar"

class EditSurvey extends Component {
    state = {}
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

        console.log(survey)

        return (
            <div className="container mt-5">
                <NavBar />
                <ul className="float-left list-unstyled">
                    <li className="dropdown notification-list topbar-dropdown">

                        <button className="btn text-dark  dropdown-toggle arrow-none pb-0 pl-0" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" style={{ lineHeight: "45px" }}>
                            <span className="align-middle h3" key={survey.id}>
                                <i className={badges()} />
                                {survey.title}
                            </span>
                            <i className="mdi mdi-chevron-down" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu" x-placement="top-end" style={{ position: "absolute" }}>

                            <span className="btn dropdown-item notify-item text-secondary">
                                <i className="mdi mdi-ballot-outline mr-2" />
                                <span className="align-right">Survey conditions</span>
                            </span>


                            <span className="btn dropdown-item notify-item">
                                <i className="mdi mdi-playlist-plus mr-2" />
                                <span className="align-middle">Upload assets</span>
                            </span>


                            <span className="btn dropdown-item notify-item">
                                <i className="mdi mdi-emoticon-poop mr-2" />
                                <span className="align-middle">Upload language</span>
                            </span>


                            <span className="btn dropdown-item notify-item">
                                <i className="mdi mdi-check mr-2"></i>
                                <span className="align-middle">Activate survey</span>
                            </span>

                        </div>
                    </li>
                    <p className="pl-2">Id: <span className="text-primary h6"> {survey.id.toString().substring(0, 8)} </span></p>
                </ul>
            </div>
        );
    }
}

export default EditSurvey;