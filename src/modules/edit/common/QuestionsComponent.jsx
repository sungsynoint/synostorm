import React, { Component } from 'react';
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
                    content: <FreeText />,
                },
                {
                    label: "Date",
                    content: <Date />,
                },
            ]
        },

        {
            type: "Single Choice",
            question: [
                {
                    label: "Dropdown",
                    content: <Dropdown />,
                },
                {
                    label: "Radio",
                    content: <Radio />,
                },
                {
                    label: "Satisfaction",
                    content: <SatisfactionMatrix />,
                },
            ]
        },
        {
            type: "Multiple Choice",
            question: [
                {
                    label: "Matrix Custom",
                    content: <MatrixCustom />,
                },
            ]
        },
        {
            type: "Single Choice Matrix",
            question: [
                {
                    label: "Matrix",
                    content: <MatrixCustom />,
                },

            ]
        },
        {
            type: "Multiple Choice Matrix",
            question: [
                {
                    label: "Dropdown",
                    content: <Dropdown />,
                },
                {
                    label: "Matrix",
                    content: <MatrixCustom />,
                },
            ]
        },

    ]

}

export default QuestionComponents;


