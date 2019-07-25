import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import { getSurveys, storeSurvey } from "../localStorage"
import AddSurvey from "./common/AddSurvey";
import Table from "./table/Table"
import NavBar from "./common/NavBar"


class Surveys extends Component {
  state = {
    surveys: getSurveys(),
    surveysId: []
  };

  render() {

    const titleSubmit = e => {
      e.preventDefault();
      const id = uuidv4();
      const surveys = [...this.state.surveys];
      const title = e.target.elements.title.value.toLowerCase().trim();
      surveys.push({
        status: "draft",
        title,
        id: id.toString().substring(0, 8),
        user: "testing@testing.com",
        completes: 0,
        language: "En",
        created: new Date().toDateString()
      });

      if (title.length > 1) {
        storeSurvey(surveys)
        e.target.elements.title.value = ""
        this.setState({
          surveys
        });
      }

    };



    const surveyCheck = (checked, surveyId) => {
      const surveys = [...this.state.surveys];
      const survey = surveys.find(survey => {
        return survey.id === surveyId.id
      });

      const surveyCheked = survey.checked = checked
      const uniqueId = !this.state.surveysId.includes(survey.id)

      if (surveyCheked && uniqueId) {
        this.state.surveysId.push(survey.id)
        console.log(this.state.surveysId)
      }
    };

    const deleteSurvey = () => {
      const { surveysId } = this.state
      const surveys = this.state.surveys.filter(td => td.id !== surveysId.join());
      this.setState({ surveys })
    }

    console.log(this.state.surveys)

    return (
      <div>
        <NavBar deleteSurvey={deleteSurvey} />
        <AddSurvey titleSubmit={titleSubmit} />
        <Table surveys={this.state.surveys} deleteSurvey={deleteSurvey} surveyCheck={surveyCheck} />
      </div>
    );
  }
}

export default Surveys;
