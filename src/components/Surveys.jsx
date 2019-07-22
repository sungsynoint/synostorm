import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import AddSurvey from "./addSurvey";
import SurveyTable from "./surveyTable";
import SurveyCounter from "./surveyCounter";

class Surveys extends Component {
  state = {
    surveys: [
      {
        title: "PPL1907004000 Rynek pracy",
        completed: false,
        id: uuidv4()
      },
      {
        title: "O-ringen 2019 ",
        completed: true,
        id: uuidv4()
      }
    ]
  };
  render() {

    const titleSubmit = e => {
      e.preventDefault();
      const id = uuidv4();
      const surveys = [...this.state.surveys];
      surveys.push({
        title: e.target.elements.title.value,
        completed: false,
        id,
        checked: false
      });

      e.target.elements.title.value = ""
      this.setState({
        surveys
      });
    };


    const notCompleted = this.state.surveys.filter(function (survey) {
      return !survey.completed;
    });

    return (
      <div>
        <SurveyCounter notCompleted={notCompleted} />
        <AddSurvey titleSubmit={titleSubmit} />

        <SurveyTable surveys={this.state.surveys} />
      </div>
    );
  }
}

export default Surveys;
