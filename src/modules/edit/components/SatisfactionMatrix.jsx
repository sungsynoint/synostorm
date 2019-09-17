import React, { Component } from 'react';
import uuid from "uuid/v4"
import RowInput from './common/RowInput';

class SatisfactionMatrix extends Component {
    state = {
        rowInput: [
            <RowInput key={uuid()} value="Very Unsatisfied" />,
            <RowInput key={uuid()} value="Unsatisfied" />,
            <RowInput key={uuid()} value="Neutral" />,
            <RowInput key={uuid()} value="Satisfied" />,
            <RowInput key={uuid()} value="Very Satisfied" />,
        ],
    }

    handleChange = (e, r) => {
        console.log(e.target.value);
        console.log(r.props.value);
    }


    onDeleteRow = (row) => {
        const rowInput = this.state.rowInput.filter(i => i.key !== row.key)
        this.setState({ rowInput })
    }

    render() {

        return (
            <div className="p-5">
                <RowInput
                    row={this.state.rowInput}
                    deleteIcon="mdi-table-row-remove"
                    onDeleteRow={this.onDeleteRow}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

export default SatisfactionMatrix;