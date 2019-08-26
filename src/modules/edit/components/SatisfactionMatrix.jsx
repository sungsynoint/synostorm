import React, { Component } from 'react';
import uuid from "uuid/v4"
import TextArea from './common/QuickAdd';
import RowInput from './common/RowInput';
import AddRow from './common/AddRow';

class SatisfactionMatrix extends Component {
    state = {
        rowInput: [<RowInput key={uuid()} />],
    }
    render() {

        const onQuickAdd = (value) => {
            console.log(value)
        }

        const onAddRow = () => {
            const rowInput = [...this.state.rowInput];
            const row = <RowInput key={uuid()} />
            rowInput.push(row)
            this.setState({ rowInput })
        }

        const onDeleteRow = (row) => {
            const rowInput = this.state.rowInput.filter(i => i.key !== row.key)
            this.setState({ rowInput })
        }

        return (
            <div className="row pb-5">
                <div className="col-12">
                    <div className="row">
                        <div className="col-7 pr-0">
                            <RowInput row={this.state.rowInput} label="Sub-question" onDeleteRow={onDeleteRow} deleteIcon="mdi-table-row-remove" />
                            <AddRow onAddRow={onAddRow} label="Add sub-question" icon="mdi mdi-comment-plus" />
                        </div>
                        <TextArea onQuickAdd={onQuickAdd} label="Quick add sub-questions" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SatisfactionMatrix;