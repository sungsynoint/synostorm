import React from 'react';

const NavBar = () => {
    return <header className="page-title-box">
        <div className="page-title-right">
            <ol className="breadcrumb m-0">
                <li className="breadcrumb-item active text-success font-weight-bold"> Design survey</li>
                <li className="breadcrumb-item">Logic</li>
                <li className="breadcrumb-item">Preview survey</li>
            </ol>
        </div>
    </header>;
}

export default NavBar;