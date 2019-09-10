import React, { Component } from 'react';
import uuid from "uuid/v4"
import TextArea from './common/QuickAdd';
import RowInput from './common/RowInput';

class SatisfactionMatrix extends Component {
    state = {
        rowInput: [
            <RowInput key={uuid()} label="Very Unsatisfied" />,
            <RowInput key={uuid()} label="Unsatisfied" />,
            <RowInput key={uuid()} label="Neutral" />,
            <RowInput key={uuid()} label="Satisfied" />,
            <RowInput key={uuid()} label="Very Satisfied" />,
        ],
    }
    render() {

        const onQuickAdd = (value) => {
            console.log(value)
        }


        const onDeleteRow = (row) => {
            const rowInput = this.state.rowInput.filter(i => i.key !== row.key)
            this.setState({ rowInput })
        }

        return (
            <div className="row chart-content-bg p-2 my-4">
                <div className="col-12">
                    <div className="row">
                        <div className="col-7 pr-0">
                            <RowInput row={this.state.rowInput} onDeleteRow={onDeleteRow} deleteIcon="mdi-table-row-remove" />
                        </div>
                        <TextArea onQuickAdd={onQuickAdd} label="Quick add sub-questions" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SatisfactionMatrix;