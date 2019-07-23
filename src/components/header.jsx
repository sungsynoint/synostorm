import React, { Component } from 'react';



class Header extends Component {
    state = {}

    render() {
        const isChecked = () => checked === null || checked.checked === false ? "disabled" : "";
        const { checked, surveys, deleteSurvey } = this.props
        console.log(surveys)




        return (<header className="page-title-box">
            <div className="page-title-right app-search ">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                    />
                    <span className="mdi mdi-magnify" />
                    <div className="input-group-append" />
                    <div className="page-buttons">
                        <button className="btn btn-secondary ml-2" disabled={isChecked()}
                        >
                            <i className="mdi mdi-content-copy"></i>
                        </button>
                        <button className="btn btn-secondary ml-2" disabled={isChecked()}
                            onClick={() => deleteSurvey(checked)}
                        >
                            <i className="mdi mdi-delete-outline"></i>
                        </button>
                    </div>
                </div>
            </div>
            <h4 className="text-dark page-title"> My surveys </h4>
        </header>);
    }
}

export default Header;