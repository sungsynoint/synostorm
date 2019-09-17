import React, { Component } from 'react';
import uuid from "uuid/v4"
import RowInput from './common/RowInput';
import AddRow from './common/AddRow';
import TextArea from './common/QuickAdd';
import NavItems from './common/NavItems';
import ColumnInput from './common/ColumnInput';
import AddColumn from './common/AddColumn';
import AddOther from './common/AddOther';


class MatixCustom extends Component {
    state = {
        rowInput: [<RowInput key={uuid()} label="Enter row label" />],
        columnInput: [<ColumnInput key={uuid()} label="Enter column label" />]
    }



    onQuickAddRow = (e) => {
        if (e.key === "Enter") {
            const value = e.target.value;
            const lines = value.split(/\r|\r\n|\n/)
            const rowInput = [...this.state.rowInput];
            const row = <RowInput
                key={uuid()}
                label="Options"
                handleChange={this.handleChangeRow}
                value={lines[lines.length - 1]}
            />
            rowInput.push(row)
            this.setState({ rowInput })
        }

        console.log(e.target.value);
    }

    handleChangeRow = (e, r) => {
        console.log(e.target.value);
        console.log(r.props.value);
    }


    addOtherRow = () => {
        const rowInput = [...this.state.rowInput];
        const row = <RowInput key={uuid()} label="Other" row={this.state.rowInput} disabled />
        rowInput.push(row)
        this.setState({ rowInput })
    }

    onAddRow = () => {
        const rowInput = [...this.state.rowInput];
        const row = <RowInput key={uuid()} label="Enter row label" />
        rowInput.push(row)
        this.setState({ rowInput })
    }

    onDeleteRow = (row) => {
        const rowInput = this.state.rowInput.filter(i => i.key !== row.key)
        this.setState({ rowInput })
    }




    onQuickAddColumn = (e) => {
        if (e.key === "Enter") {
            const value = e.target.value;
            const lines = value.split(/\r|\r\n|\n/)
            const columnInput = [...this.state.columnInput];
            const column = <ColumnInput
                key={uuid()}
                label="Options"
                handleChange={this.handleChangeColumn}
                value={lines[lines.length - 1]}
            />
            columnInput.push(column)
            this.setState({ columnInput })
        }

        console.log(e.target.value);
    }

    handleChangeColumn = (e, r) => {
        console.log(e.target.value);
        console.log(r.props.value);
    }

    onAddColumn = () => {
        const columnInput = [...this.state.columnInput];
        const column = <ColumnInput key={uuid()} label="Enter column label" />
        columnInput.push(column)
        this.setState({ columnInput })
    }

    onDeleteColumn = (column) => {
        const columnInput = this.state.columnInput.filter(i => i.key !== column.key)
        this.setState({ columnInput })
    }


    addOtherColumn = () => {
        const columnInput = [...this.state.columnInput];
        const column = <ColumnInput key={uuid()} label="Other" column={this.state.columnInput} disabled />
        columnInput.push(column)
        this.setState({ columnInput })
    }

    render() {




        return (
            <div className="row pb-5 my-4">
                <div className="col-12">
                    <NavItems />
                    <div className="tab-content">
                        <div className="tab-pane active" id="row">
                            <div className="row">
                                <div className="col-7 pr-0">
                                    <RowInput
                                        row={this.state.rowInput}
                                        deleteIcon="mdi-table-row-remove"
                                        onDeleteRow={this.onDeleteRow}
                                        handleChange={this.handleChangeRow}
                                    />
                                    <AddRow
                                        onAddRow={this.onAddRow}
                                        label="Add row"
                                        icon="mdi-table-row-plus-after"
                                    />
                                    <AddOther addOther={this.addOtherRow} />
                                </div>
                                <TextArea
                                    onQuickAdd={this.onQuickAddRow}
                                    label="Quick add rows"
                                />
                            </div>

                        </div>
                        <div className="tab-pane show" id="column">

                            <div className="row">
                                <div className="col-7 pr-0">
                                    <ColumnInput
                                        column={this.state.columnInput}
                                        deleteIcon="mdi-table-column-remove"
                                        onDeleteColumn={this.onDeleteColumn}
                                        handleChange={this.handleChangeColumn}
                                    />
                                    <AddColumn onAddColumn={this.onAddColumn} />
                                    <AddOther addOther={this.addOtherColumn} />
                                </div>
                                <TextArea onQuickAdd={this.onQuickAddColumn} label="Quick add columns" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MatixCustom;








