import React, { Component } from 'react';
import uuid from "uuid/v4"
import RowInput from './common/RowInput';
import AddRow from './common/AddRow';
import TextArea from './common/TextArea';
import NavItems from './common/NavItems';
import ColumnInput from './common/ColumnInput';
import AddColumn from './common/AddColumn';


class MatixCustom extends Component {
    state = {
        rowInput: [<RowInput key={uuid()} />],
        columnInput: [<ColumnInput key={uuid()} />]
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


        const onDeleteColumn = (column) => {
            const columnInput = this.state.columnInput.filter(i => i.key !== column.key)
            this.setState({ columnInput })
        }

        const onAddColumn = () => {
            const columnInput = [...this.state.columnInput];
            const column = <RowInput key={uuid()} />
            columnInput.push(column)
            this.setState({ columnInput })
        }


        return (
            <div className="row pb-5">
                <div className="col-12">
                    <NavItems />
                    <div className="tab-content">
                        <div className="tab-pane active" id="row">
                            <div className="row">
                                <div className="col-7 pr-0">
                                    <RowInput row={this.state.rowInput} onDeleteRow={onDeleteRow} label="Enter row label" deleteIcon="mdi-table-row-remove" />
                                    <AddRow onAddRow={onAddRow} label="Add row" icon="mdi-table-row-plus-after" />
                                </div>
                                <TextArea onQuickAdd={onQuickAdd} label="Quick add rows" />
                            </div>

                        </div>
                        <div className="tab-pane show" id="column">

                            <div className="row">
                                <div className="col-7 pr-0">
                                    <ColumnInput column={this.state.columnInput} onDeleteColumn={onDeleteColumn} label="Enter column label" />
                                    <AddColumn onAddColumn={onAddColumn} />
                                </div>
                                <TextArea onQuickAdd={onQuickAdd} label="Quick add columns" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MatixCustom;








