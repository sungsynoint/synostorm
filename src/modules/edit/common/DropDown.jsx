import React from 'react';

const DropDown = ({ survey, badges }) => {
    return (<ul className="float-left list-unstyled">
        <li className="dropdown notification-list topbar-dropdown">

            <button className="btn text-dark  dropdown-toggle arrow-none pb-0 pl-0" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" style={{ lineHeight: "45px" }}>
                <span className="align-middle h3" key={survey.id}>
                    <i className={badges()} />
                    {survey.title}
                </span>
                <i className="mdi mdi-chevron-down" />
            </button>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu" x-placement="top-end" style={{ position: "absolute" }}>

                <span className="btn dropdown-item notify-item text-secondary">
                    <i className="mdi mdi-ballot-outline mr-2" />
                    <span className="align-right">Survey conditions</span>
                </span>


                <span className="btn dropdown-item notify-item">
                    <i className="mdi mdi-playlist-plus mr-2" />
                    <span className="align-middle">Upload assets</span>
                </span>


                <span className="btn dropdown-item notify-item">
                    <i className="mdi mdi-emoticon-poop mr-2" />
                    <span className="align-middle">Upload language</span>
                </span>


                <span className="btn dropdown-item notify-item">
                    <i className="mdi mdi-check mr-2"></i>
                    <span className="align-middle">Activate survey</span>
                </span>

            </div>
        </li>
        <p className="pl-2">Id: <span className="text-primary h6"> {survey.id} </span></p>
    </ul>);
}

export default DropDown;