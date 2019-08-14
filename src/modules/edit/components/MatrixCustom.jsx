import React, { Component } from 'react';
import uuid from "uuid/v4"
import RowInput from './common/RowInput';


class MatixCustom extends Component {
    state = {
        quickAdd: "",
        label: "",
        input: []
    }



    render() {


        const onQuickAdd = (value) => {
            console.log(value)
        }


        const onEnterLabel = (value) => {
            console.log(value)
        }


        const onAddRow = (e) => {
            const input = [...this.state.input];
            const row = <RowInput onEnterLabel={onEnterLabel} state={this.state.label} onAddRow={onAddRow} key={uuid()} />
            input.push(row)
            this.setState({ input })

        }
        console.log(this.state.input)

        return (
            <div className="row">
                <div className="col-7 pr-3">
                    <RowInput key={uuid()} value={this.label} onEnterLabel={onEnterLabel} />
                    {this.state.input}

                    <span className="btn-block text-center" onClick={(e) => onAddRow(e)}>
                        <i className="mdi mdi-plus-circle-outline"></i>
                        Add another row
                    </span>

                </div>
                <div className="col-5">
                    <div className="row">
                        <div className="col-12 pl-1">
                            <div className="form-group mb-3">
                                <textarea className="form-control" onChange={(e) => onQuickAdd(e.target.value)} rows="3" placeholder="Quick add..." />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default MatixCustom;








