import React, { Component } from "react";
import { Link } from "react-router-dom";

class SurveyTable extends Component {

  render() {

    const surveyCheck = survey => {
      console.log(survey)
    };

    const surveyStatus = (survey) => {
      let statusIcon = "mdi mdi-circle"

      if (survey.completed) {
        statusIcon += " text-success"
      } else {
        statusIcon += " text-danger"
      }

      return <i className={statusIcon} key={survey.id}></i>

    }

    const { surveys } = this.props;

    return (
      <table className="table table-hover table-centered mb-0">
        <thead>
          <tr>
            <th></th>
            <th>Status</th>
            <th>Title</th>
            <th>Id</th>
            <th>User</th>
            <th>Completes</th>
            <th>Language</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {surveys.map(survey => {
            return (
              <tr key={survey.id}>
                <td >
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id={survey.id}
                      className="custom-control-input"
                      onChange={() => surveyCheck(survey)}
                    />
                    <label className="custom-control-label" htmlFor={survey.id}></label>
                  </div>
                </td>

                <td>
                  {surveyStatus(survey)}
                </td>

                <td>
                  <Link to="/edit-survey">
                    <span className="border-0" key={survey.id}>
                      {survey.title}
                    </span>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default SurveyTable;
