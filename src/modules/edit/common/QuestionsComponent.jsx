import React, { Component } from 'react';
import uuid from "uuid/v4"
import FreeText from '../components/FreeText';
import Date from '../components/Date';
import Dropdown from '../components/Dropdown';
import SatisfactionMatrix from '../components/SatisfactionMatrix';
import MatrixCustom from '../components/MatrixCustom';
import Radio from '../components/Radio';

class QuestionComponents extends Component {

    questions = [
        {
            type: "Text",
            question: [
                {
                    label: "Free input",
                    content: <FreeText id={uuid()} />,
                },
                {
                    label: "Date",
                    content: <Date id={uuid()} />,
                },
            ]
        },

        {
            type: "Single Choice",
            question: [
                {
                    label: "Dropdown",
                    content: <Dropdown id={uuid()} />,
                },
                {
                    label: "Radio",
                    content: <Radio id={uuid()} />,
                },
                {
                    label: "Satisfaction",
                    content: <SatisfactionMatrix id={uuid()} />,
                },
            ]
        },
        {
            type: "Multiple Choice",
            question: [
                {
                    label: "Matrix Custom",
                    content: <MatrixCustom id={uuid()} />,
                },
            ]
        },
        {
            type: "Single Choice Matrix",
            question: [
                {
                    label: "Matrix",
                    content: <MatrixCustom id={uuid()} />,
                },

            ]
        },
        {
            type: "Multiple Choice Matrix",
            question: [
                {
                    label: "Dropdown",
                    content: <Dropdown id={uuid()} />,
                },
                {
                    label: "Matrix",
                    content: <MatrixCustom id={uuid()} />,
                },
            ]
        },

    ]

}

export default QuestionComponents;


