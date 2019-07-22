import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header"


class SurveyTable extends Component {

  render() {


    const surveyStatus = (survey) => {
      if (survey.completed) {
        return <span className="badge badge-dark">Closed</span>
      } else {
        return <span className="badge badge-success">Open</span>
      }
    }

    const surveyCheck = (checked, survey) => {
      this.setState({
        checked
      })
    };


    const { surveys } = this.props;

    return (
      <div>
        <Header checked={this.state} />
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
                        onChange={(e) => surveyCheck(e.target.checked, survey)}
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
      </div>
    );
  }
}

export default SurveyTable;
