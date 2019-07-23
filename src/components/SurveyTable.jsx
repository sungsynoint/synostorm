import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header"


class SurveyTable extends Component {

  state = {
    surveys: this.props.surveys
  }

  render() {


    const { surveys } = this.state;
    const { deleteSurvey } = this.props

    const surveyStatus = (survey) => {
      if (survey.status === "closed") {
        return <span className="badge badge-dark">Closed</span>
      } else if (survey.status === "open") {

        return <span className="badge badge-success">Open</span>

      } else {
        return <span className="badge badge-warning text-white">Draft</span>
      }
    }

    const surveyCheck = (checked, survey) => {
      console.log(survey)
      this.setState({
        checked
      })
    };




    return (
      <div>
        <Header checked={this.state} surveys={this.state} deleteSurvey={deleteSurvey} />

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

                  <td className="w-25">
                    <Link to={`/edit-survey#${survey.id}`}>
                      <span className="border-0" key={survey.id}>
                        {survey.title}
                      </span>
                    </Link>
                  </td>
                  <td>
                    {survey.id}
                  </td>
                  <td>
                    {survey.user}
                  </td>
                  <td>
                    {survey.completes}
                  </td>
                  <td>
                    {survey.language}
                  </td>
                  <td>
                    {survey.created}
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
