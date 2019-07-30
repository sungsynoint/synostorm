import React from 'react';


const NavBar = () => {
    return <header className="page-title-box">
        <div className="page-title-right app-search mt-0">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                />
                <span className="mdi mdi-magnify" />
                <div className="input-group-append" />
                <div className="page-buttons">
                    <button className="btn btn-primary ml-2">
                        Preview
                    </button>

                </div>
            </div>
        </div>
    </header>;
}

export default NavBar;