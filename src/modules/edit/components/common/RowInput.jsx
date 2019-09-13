import React, { Component } from 'react';

class RowInput extends Component {

    render() {
        const { row, onDeleteRow, deleteIcon, } = this.props;

        return (
            <div>
                {row.map((r, i) => {

                    return (
                        <div key={r.key}>
                            <div className="form-row pb-1" key={row.key}>
                                <div className="col-1">
                                    <input type="text" name="number" className="form-control p-1" defaultValue={i + 1}></input>
                                </div>
                                <div className="col-9">

                                    <div className="input-group" id="options" key={Math.random()}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={r.props.label}
                                            disabled={r.props.disabled ? r.props.disabled : false}
                                            onChange={this.props.handleChange}
                                            value={r.props.value}
                                        />
                                    </div>

                                </div>
                                <div className="col-2">
                                    <div className="button-list row">
                                        <button className="btn btn-light border" onClick={() => onDeleteRow(r)}>
                                            <i className={`mdi ${deleteIcon}`}></i>
                                        </button>
                                    </div>
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