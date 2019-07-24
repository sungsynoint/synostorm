import React from 'react';
import { Link } from "react-router-dom";

const TableBody = ({ surveys, surveyCheck }) => {

    const surveyStatus = (survey) => {
        if (survey.status === "closed") {
            return <span className="badge badge-dark">Closed</span>
        } else if (survey.status === "open") {

            return <span className="badge badge-success">Open</span>

        } else {
            return <span className="badge badge-warning text-white">Draft</span>
        }
    }

    return (
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
    );
}

export default TableBody;