import React from 'react';

const NavBar = ({ deleteSurvey, }) => {

    return (
        <header className="page-title-box">
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
                        <button className="btn btn-secondary ml-2"
                            disabled={true}
                        >
                            <i className="mdi mdi-content-copy"></i>
                        </button>

                        <button className="btn btn-secondary ml-2"

                            onClick={() => deleteSurvey()}>
                            <i className="mdi mdi-delete-outline"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;







