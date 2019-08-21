import React from 'react';

const NavBar = () => {
    return <header className="page-title-box">
        <div className="page-title-right">
            <ul className="nav nav-tabs nav-bordered mb-3">
                <li className="nav-item">
                    <a href="#home-b1" data-toggle="tab" aria-expanded="true" className="nav-link active">
                        <i className="mdi mdi-home-variant d-lg-none d-block mr-1"></i>
                        <span className="d-none d-lg-block">Create</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#profile-b1" data-toggle="tab" aria-expanded="false" className="nav-link">
                        <i className="mdi mdi-account-circle d-lg-none d-block mr-1"></i>
                        <span className="d-none d-lg-block">Conditions</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#settings-b1" data-toggle="tab" aria-expanded="false" className="nav-link">
                        <i className="mdi mdi-settings-outline d-lg-none d-block mr-1"></i>
                        <span className="d-none d-lg-block">Preview</span>
                    </a>
                </li>
            </ul>
        </div>
    </header>;
}

export default NavBar;