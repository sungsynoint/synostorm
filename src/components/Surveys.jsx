import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import AddSurvey from "./AddSurvey";
import SurveyTable from "./SurveyTable";
import SurveyCounter from "./SurveyCounter";

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
        id
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
        <header className="my-4 title">
          <h2 className="text-dark"> My surveys </h2>
        </header>

        <SurveyCounter notCompleted={notCompleted} />
        <AddSurvey titleSubmit={titleSubmit} />
        <div className="app-search w-25">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <span className="mdi mdi-magnify" />
            <div className="input-group-append" />
          </div>
        </div>
        <SurveyTable surveys={this.state.surveys} />
      </div>
    );
  }
}

export default Surveys;
