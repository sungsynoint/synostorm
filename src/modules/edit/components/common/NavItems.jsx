import React from 'react';



const navItem = (id, label, expanded, attribute) => {
    return <li className="nav-item">
        <a href={`#${id}`} data-toggle="tab" aria-expanded={expanded} className={`nav-link rounded-0 ${attribute}`}>
            <i className="mdi mdi-home-variant d-lg-none d-block mr-1"></i>
            <span className="d-none d-lg-block text-dark">{label}</span>
        </a>
    </li>
}

const NavItems = () => {
    return (<ul className="nav nav-tabs my-3 justify-content-center">
        {navItem("row", "Row", "false", "active")}
        {navItem("column", "Column", "true", " ")}
    </ul>);
}

export default NavItems;