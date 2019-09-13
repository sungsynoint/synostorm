import React, { Component } from 'react';
import uuid from "uuid/v4"
import TextArea from './common/QuickAdd';
import RowInput from './common/RowInput';
import AddRow from './common/AddRow';
import AddOther from './common/AddOther';

class Dropdown extends Component {
    state = {
        rowInput: [<RowInput key={uuid()} label="Option" />],
    }

    handleChange = (e) => {
        console.log(e.target.value);
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
    }

    onAddRow = () => {
        const rowInput = [...this.state.rowInput];
        const row = <RowInput key={uuid()} label="Option" row={this.state.rowInput} />
        rowInput.push(row)
        this.setState({ rowInput })
    }

    addOther = () => {
        const rowInput = [...this.state.rowInput];
        const row = <RowInput key={uuid()} label="Other" row={this.state.rowInput} disabled />
        rowInput.push(row)
        this.setState({ rowInput })
    }



    onDeleteRow = (row) => {
        const rowInput = this.state.rowInput.filter(i => i.key !== row.key)
        this.setState({ rowInput })
    }



    render() {
        return (
            <div>
                <div className="row chart-content-bg p-2 my-4">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-7 pr-0">
                                <RowInput
                                    row={this.state.rowInput}
                                    deleteIcon="mdi-playlist-remove"
                                    onDeleteRow={this.onDeleteRow}
                                    handleChange={this.handleChange}
                                    test={this.state.text}
                                />
                                <AddRow onAddRow={this.onAddRow}
                                    label="Add option"
                                    icon="mdi-playlist-plus" />
                                <AddOther addOther={this.addOther} />
                            </div>
                            <TextArea onQuickAdd={this.onQuickAdd} label="Quick add options" />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dropdown;