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

    const createSurvey = e => {
      e.preventDefault();
      const id = uuidv4();
      const timeStamp = moment().valueOf();
      const surveys = [...this.state.surveys];
      const title = e.target.elements.title.value.toLowerCase().trim();
      surveys.push({
        status: "draft",
        title,
        id: id.toString().substring(0, 8),
        user: "testing@testing.com",
        completes: 0,
        language: "En",
        created: timeStamp,
        edited: moment(timeStamp).format("MMMM Do YYYY"),
        checked: false,
      });



      if (title.length > 1) {
        const survey = surveys[surveys.length - 1]
        storeSurvey(surveys)
        e.target.elements.title.value = ""
        this.setState({ surveys });
        window.location.assign(`/edit-survey#${survey.id}`)
      }

    };

    const surveyCheck = (checked, survey) => {
      const surveys = [...this.state.surveys];
      const surveyObj = surveys.find(s => s.id === survey.id);

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
      const surveys = this.state.surveys.filter(survey => !survey.checked)
      storeSurvey(surveys)
      this.setState({ surveys })
    }

    const copySurvey = () => {
      const survey = [...this.state.survey.filter(s => s.id = Math.random())]
      console.log(survey)
      //  storeSurvey(surveys)
      // this.setState({ survey })

    }


    return (
      <div>
        <NavBar deleteSurvey={deleteSurvey} surveys={this.state.surveys} copySurvey={copySurvey} />
        <AddSurvey createSurvey={createSurvey} />
        <Table surveys={this.state.surveys} deleteSurvey={deleteSurvey} surveyCheck={surveyCheck} />
      </div >
    );
  }
}

export default Surveys;
