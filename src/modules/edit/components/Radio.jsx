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
    render() {

        const onQuickAdd = (value) => {
            console.log(value)
        }

        const onAddRow = () => {
            const rowInput = [...this.state.rowInput];
            const row = <RowInput key={uuid()} label="Option" />
            rowInput.push(row)
            this.setState({ rowInput })
        }

        const onDeleteRow = (row) => {
            const rowInput = this.state.rowInput.filter(i => i.key !== row.key)
            this.setState({ rowInput })
        }


        const addOther = () => {
            const rowInput = [...this.state.rowInput];
            const row = <RowInput key={uuid()} label="Other" disabled />
            rowInput.push(row)
            this.setState({ rowInput })
        }

        return (
            <div className="chart-content-bg p-3 my-4">
                <div className="col-12">
                    <div className="row">
                        <div className="col-7 pr-0">
                            <RowInput row={this.state.rowInput} onDeleteRow={onDeleteRow} deleteIcon="mdi-table-row-remove" />
                            <AddRow onAddRow={onAddRow} label="Add option" icon="mdi-radiobox-blank" />
                            <AddOther addOther={addOther} />
                        </div>
                        <TextArea onQuickAdd={onQuickAdd} label="Quick add options" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SatisfactionMatrix;