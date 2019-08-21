import React, { Component } from 'react';


class Date extends Component {
    state = {}
    render() {
        return (<div className="row pb-5">
            <div className="col-12 d-flex justify-content-center">
                <input type="date" className="form-control w-50 text-center" placeholder="Free text area" disabled />
            </div>
        </div>);
    }
}

export default Date;