import React, { Component } from 'react';
import uuid from "uuid/v4"
import RowInput from './common/RowInput';
import AddRow from './common/AddRow';


class MatixCustom extends Component {
    state = {

        input: [<RowInput key={uuid()} />]
    }



    render() {
  
        const onQuickAdd = (value) => {
            console.log(value)
        }


        const onAddRow = () => {
            const input = [...this.state.input];
            const row = <RowInput key={uuid()} />
            input.push(row)
            this.setState({ input })
        }

        const onDeleteRow = (row) => {
            const input = this.state.input.filter(i => i.key !== row.key)
            this.setState({ input })
        }


        return (
            <div className="row">
                <div className="col-7 pr-3">
                    <RowInput input={this.state.input} onDeleteRow={onDeleteRow} />
                    <AddRow onAddRow={onAddRow} />
                </div>

                <div className="col-5">
                    <div className="row">
                        <div className="col-12 pl-1">
                            <div className="form-group mb-3">
                                <textarea className="form-control" id="textareabox" onChange={(e) => onQuickAdd(e.target.value)} rows="3" placeholder="Quick add..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MatixCustom;








