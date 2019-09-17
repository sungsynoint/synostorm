import React, { Component } from 'react';
import uuid from "uuid/v4"
import TextArea from './common/QuickAdd';
import RowInput from './common/RowInput';
import AddRow from './common/AddRow';
import AddOther from './common/AddOther';


class SatisfactionMatrix extends Component {
    state = {
        rowInput: [<RowInput key={uuid()} label="Option" />],
    }





    handleChange = (e, r) => {
        console.log(e.target.value);
        console.log(r.props.value);
    }

    onQuickAdd = (e) => {
        if (e.key === "Enter") {
            const value = e.target.value;
            const lines = value.split(/\r|\r\n|\n/)
            const rowInput = [...this.state.rowInput];
            const row = <RowInput
                key={uuid()}
                label="Options"
                handleChange={this.handleChange}
                value={lines[lines.length - 1]}
            />
            rowInput.push(row)
            this.setState({ rowInput })
        }

        console.log(e.target.value);
    }

    onAddRow = () => {
        const rowInput = [...this.state.rowInput];
        const row = <RowInput key={uuid()} label="Option" />
        rowInput.push(row)
        this.setState({ rowInput })
    }

    onDeleteRow = (row) => {
        const rowInput = this.state.rowInput.filter(i => i.key !== row.key)
        this.setState({ rowInput })
    }


    addOther = () => {
        const rowInput = [...this.state.rowInput];
        const row = <RowInput key={uuid()} label="Other" disabled />
        rowInput.push(row)
        this.setState({ rowInput })
    }


    render() {

        return (
            <div className="p-3 my-4">
                <div className="col-12">
                    <div className="row">
                        <div className="col-7 pr-0">
                            <RowInput
                                row={this.state.rowInput}
                                deleteIcon="mdi-table-row-remove"
                                onDeleteRow={this.onDeleteRow}
                                handleChange={this.handleChange}
                            />
                            <AddRow onAddRow={this.onAddRow} label="Add option" icon="mdi-radiobox-blank" />
                            <AddOther addOther={this.addOther} />
                        </div>
                        <TextArea onQuickAdd={this.onQuickAdd} label="Quick add options" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SatisfactionMatrix;