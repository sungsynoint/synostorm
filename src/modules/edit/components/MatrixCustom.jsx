import React, { Component } from 'react';



class MatixCustom extends Component {
    state = {}
    render() {
        return (<div className="row">
            <div className="col-7 pr-3">
                <form>
                    <div className="form-row">
                        <div className="col-1">
                            <input className="form-control p-1" type="number" name="number"></input>
                        </div>
                        <div className="col-9">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter row label" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="button-list row">
                                <button className="btn btn-light border">
                                    <i className="mdi mdi-table-row-plus-after"></i>
                                </button>
                                <button className="btn btn-light border">
                                    <i className="mdi mdi-table-row-remove"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-5">
                <div className="row">
                    <div className="col-8 px-1">
                        <div className="form-group mb-3">
                            <textarea className="form-control" id="example-textarea" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="text-center">
                            <input className="btn btn-block btn-sm btn-dark" type="submit" value="Quick add" />
                            <input className="btn btn-block btn-sm btn-dark" type="submit" value="Replace" disabled />
                            <input className="btn btn-block btn-sm btn-dark" type="reset" value="Reset" disabled />
                            <input className="btn btn-block btn-sm btn-info" type="submit" value="Save" disabled />
                        </div>
                    </div>

                </div>
            </div>

        </div>);
    }
}

export default MatixCustom;