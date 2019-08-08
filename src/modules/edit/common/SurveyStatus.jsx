import React from 'react';

const SurveyStatus = ({ survey, badges }) => {
    return (<div className="float-left pt-2">

        <h3 className="align-middle" key={survey.id}>
                    <i className={badges()} />
                    {survey.title}
        </h3>
        <p className="pl-2">Id: <span className="text-primary h6"> {survey.id} </span></p>
    </div>);
}

export default SurveyStatus;