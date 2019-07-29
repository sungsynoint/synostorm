import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import moment from "moment";
import { getSurveys, storeSurvey } from "../localStorage"
import AddSurvey from "./common/AddSurvey";
import Table from "./table/Table"
import NavBar from "./common/NavBar"


class Surveys extends Component {
  state = {
    surveys: getSurveys(),
    survey: []
  };

  render() {

    const titleSubmit = e => {
      e.preventDefault();
      const id = uuidv4();
      const timeStamp = moment().valueOf();
      const surveys = [...this.state.surveys];
      const title = e.target.elements.title.value.toLowerCase().trim();
      surveys.push({
        status: "draft",
        title,
        id,
        user: "testing@testing.com",
        completes: 0,
        language: "En",
        created: timeStamp,
        checked: false,
      });

      if (title.length > 1) {
        storeSurvey(surveys)
        e.target.elements.title.value = ""
        this.setState({
          surveys
        });
      }

    };

    const surveyCheck = (checked, survey) => {
      const surveys = [...this.state.surveys];

      const surveyObj = surveys.find(s => {
        return s.id === survey.id
      });

      const surveyChecked = surveyObj.checked = checked;
      const uniqueSurvey = !this.state.survey.includes(surveyObj)

      if (surveyChecked && uniqueSurvey) {
        this.state.survey.push(survey)
      }

      if (!surveyChecked) {
        const survey = this.state.survey.filter(td => td.id !== surveyObj.id);
        this.setState({ survey });
      }

    };



    const deleteSurvey = () => {

      const surveys = this.state.surveys.filter(survey => {
        return !survey.checked
      })
      this.setState({ surveys })
    }



    return (
      <div>

        <NavBar deleteSurvey={deleteSurvey} />
        <AddSurvey titleSubmit={titleSubmit} />
        <Table surveys={this.state.surveys} deleteSurvey={deleteSurvey} surveyCheck={surveyCheck} />
      </div >
    );
  }
}

export default Surveys;
