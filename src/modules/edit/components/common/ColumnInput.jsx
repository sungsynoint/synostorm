import React, { Component } from "react";


class ColumnInput extends Component {

    render() {
        const { column, onDeleteColumn, deleteIcon } = this.props;
        return (
            <div>
                {column.map((c, i) => {
                    return (
                        <div key={c.key}>
                            <div className="form-row pb-1">
                                <div className="col-1">
                                    <input type="text" name="number" className="form-control p-1" defaultValue={i + 1}></input>
                                </div>
                                <div className="col-9">

                                    <div className="input-group" id="options" >
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={c.props.label}
                                            disabled={c.props.disabled ? c.props.disabled : false}
                                            onChange={(e) => this.props.handleChange(e, c)}
                                            defaultValue={c.props.value}
                                        />
                                    </div>

                                </div>
                                <div className="col-2">
                                    <div className="button-list row">
                                        <button className="btn btn-light border" onClick={() => onDeleteColumn(c)}>
                                            <i className={`mdi ${deleteIcon}`}></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )

                })}
            </div>
        )
    }
}

export default ColumnInput;