import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import AddSurvey from "./addSurvey";
import SurveyTable from "./surveyTable";
import { getSurveys, storeSurvey } from "../localStorage"


class Surveys extends Component {
  state = {
    surveys: getSurveys()
  };



  render() {

    const surveys = getSurveys()
    console.log(surveys)

    const titleSubmit = e => {
      e.preventDefault();
      const id = uuidv4();
      const surveys = [...this.state.surveys];
      surveys.push({
        status: "draft",
        title: e.target.elements.title.value,
        id: id.toString().substring(0, 8),
        user: "testing@testing.com",
        completes: 0,
        language: "En",
        created: new Date().toDateString()
      });
      storeSurvey(surveys)
      e.target.elements.title.value = ""
      this.setState({
        surveys
      });
    };


    const deleteSurvey = (survey) => {
      console.log(survey)
    }


    return (
      <div>
        <AddSurvey titleSubmit={titleSubmit} />
        <SurveyTable surveys={this.state.surveys} deleteSurvey={deleteSurvey} />
      </div>
    );
  }
}

export default Surveys;
