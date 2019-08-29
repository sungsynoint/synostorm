import React from 'react';



const LeftMenu = () => {
    return (
        <div className="left-side-menu active">

            <div className="slimScrollDiv in" style={{ position: " relative", overflow: " hidden", width: " auto", height: " 621px" }}>
                <div className="slimscroll-menu active" style={{ overflow: "hidden", width: " auto", height: "621px" }}>

                    <a href="/en/" className="logo text-center active">
                        <span className="logo-lg">
                            <img src="/images/logo.png" alt="" height="24" />
                        </span>
                        <span className="logo-sm">
                            <img src="/images/logo_sm.png" alt="" height="16" />
                        </span>
                    </a>

                    <ul className="metismenu side-nav in">

                        <li className="side-nav-item active">
                            <a href="/en/" className="side-nav-link active">
                                <i className="dripicons-home"></i>
                                <span> Dashboard </span>
                            </a>
                        </li>

                        <li className="side-nav-item">
                            <a href="/en/projects" className="side-nav-link ">
                                <i className="dripicons-briefcase"></i>
                                <span> Projects</span>
                            </a>
                        </li>

                        <li className="side-nav-item ">
                            <a href="/en/audience-campaigns" className="side-nav-link">
                                <i className="dripicons-web"></i>
                                <span> Audience </span>
                            </a>
                        </li>

                        <li className="side-nav-item">
                            <a href="/en/identity-campaigns" className="side-nav-link">
                                <i className="dripicons-user-id"></i>
                                <span> Identities </span>
                            </a>
                        </li>

                        <li className="side-nav-item ">
                            <a href="javascript: void(0);" className="side-nav-link">
                                <i className="dripicons-message"></i>
                                <span> Answers </span>
                                <span className="menu-arrow"></span>
                            </a>

                            <ul className="side-nav-second-level collapse" aria-expanded="false">
                                <li>
                                    <a href="/en/omnibus-orders/about">About</a>
                                </li>
                                <li>
                                    <a href="/en/omnibus-balance">Balance</a>
                                </li>
                                <li>
                                    <a href="/en/omnibus-orders/list">Orders</a>
                                </li>
                            </ul>
                        </li>

                        <li className="side-nav-item">
                            <a href="/en/market/evaluation" className="side-nav-link">
                                <i className="dripicons-graph-line"></i>
                                <span> Market Evaluation </span>
                            </a>
                        </li>

                        <li className="side-nav-item">
                            <a href="/en/panels" className="side-nav-link">
                                <i className="dripicons-view-thumb"></i>
                                <span> Panels </span>
                            </a>
                        </li>

                        <li className="side-nav-item">
                            <a href="javascript: void(0);" className="side-nav-link">
                                <i className="dripicons-gear mr-1"></i>
                                <span> Settings </span>
                                <span className="menu-arrow"></span>
                            </a>

                            <ul className="side-nav-second-level collapse" aria-expanded="false">

                                <li>
                                    <a href="/en/employees">
                                        Employees
                        </a>
                                </li>



                                <li>
                                    <a href="/en/users">
                                        Users
                        </a>
                                </li>


                            </ul>
                        </li>
                    </ul>


                    <div className="clearfix"></div>

                </div>
                <div className="slimScrollBar" style={{ background: " rgb(158, 165, 171)", width: " 8px", position: "absolute", top: "-362px", opacity: " 0.4", display: " none", borderRadius: "7px", zIndex: "99", right: "1px", height: "621px" }}>
                </div>
                <div className="slimScrollRail" style={{ width: "8px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "7px", background: "rgb(51, 51, 51)", opacity: "0.2", zIndex: "90", right: "1px" }}>
                </div>
            </div >

        </div >
    )
}

export default LeftMenu;