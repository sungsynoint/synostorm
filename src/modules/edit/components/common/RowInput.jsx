import React, { Component } from 'react';



class RowInput extends Component {
    state = {
        quickAdd: [],
        label: "",
    }

    render() {
        const { input, onDeleteRow } = this.props;
        return (
            <div>
                {input.map(i => {
                    return (
                        <div className="form-row pb-1" key={i.key}>
                            <div className="col-1">
                                <input type="text" name="number" className="form-control p-1" defaultValue={`${input.length}`}></input>
                            </div>
                            <div className="col-9">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter row label" />
                                </div>

                            </div>
                            <div className="col-2">
                                <div className="button-list row">
                                    <button className="btn btn-light border" onClick={() => onDeleteRow(i)}>
                                        <i className="mdi mdi-table-row-remove"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default RowInput;