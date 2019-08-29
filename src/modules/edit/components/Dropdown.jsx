import React, { Component } from 'react';
import uuid from "uuid/v4"
import TextArea from './common/QuickAdd';
import RowInput from './common/RowInput';
import AddRow from './common/AddRow';

class Dropdown extends Component {
    state = {
        rowInput: [<RowInput key={uuid()} />],
    }

    render() {

        const onQuickAdd = (value) => {
            console.log(value)
        }

        const onDeleteRow = (row) => {
            const rowInput = this.state.rowInput.filter(i => i.key !== row.key)
            this.setState({ rowInput })
        }

        const onAddRow = () => {
            const rowInput = [...this.state.rowInput];
            const row = <RowInput key={uuid()} />
            rowInput.push(row)
            this.setState({ rowInput })
        }

        return (
            <div>
                <div className="row chart-content-bg p-2 my-4">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-7 pr-0">
                                <RowInput row={this.state.rowInput} label="Option" onDeleteRow={onDeleteRow} deleteIcon="mdi-playlist-remove" />
                                <AddRow onAddRow={onAddRow} label="Add option" icon="mdi-playlist-plus" />
                            </div>
                            <TextArea onQuickAdd={onQuickAdd} label="Quick add options" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dropdown;