import React from "react";
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
    const [SubmenuShow, setSubmenuShow] = useState("false");
    const [SideBarCollpase, setSideBarCollpase] = useState("false");
    const handleSubmenuShow = () => {
        setSubmenuShow(!SubmenuShow);
    };
    const handleSidebar = () => {
        setSideBarCollpase(!SideBarCollpase);
    };
    // const handleCollectionModalClose = () => setNewMessagehow(false);
    return (
        <div className={`sidebar ${SubmenuShow ? "" : "submenu-active"} ${SideBarCollpase ? "" : "sidebar-collapse"}`}>
            <div className="sidebar-top">
                <div className="sidebar-header pt-3 pb-2 px-3 position-relative">
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 pe-2">
                            <img width="32px" height="32px" src="https://www.etsy.com/images/seller-tools/vacation_mode.svg" alt="..." />
                        </div>
                        <div className="flex-grow-1">
                            <div className="h3 mb-0">Shop Manager<span className="ss-icon ss-dropdown icon-smallest text-gray-lightest pl-xs-1" aria-hidden="true"></span></div>
                            <div className="small text-lightest-gray"><span>Your shop is on holiday</span></div>
                        </div>
                    </div>
                </div>
                <ul className="nav flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <svg fill="CurrentColor" width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path><path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path></svg>
                            <span>Search</span>
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className="nav-link">
                            <svg fill="CurrentColor" width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21,22H14a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v5a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V11a1,1,0,0,1,.336-0.747l9-8a1,1,0,0,1,1.328,0l9,8A1,1,0,0,1,22,11V21A1,1,0,0,1,21,22Zm-6-2h5V11.449L12,4.338,4,11.449V20H9V16a3,3,0,0,1,6,0v4Z"></path></svg>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/listing" className="nav-link">
                            <svg fill="CurrentColor" width="24px" height="24px" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M13.991,4A3,3,0,1,1,11,7a3,3,0,0,1,2.99-3m0-2a5,5,0,1,0,5,5,4.994,4.994,0,0,0-5-5h0Z"></path><path d="M20,16v4H16V16h4m2-2H14v8h8V14h0Z"></path><path d="M7,13.118L8.6,16H5.4L7,13.118M7,9L2,18H12L7,9H7Z"></path></svg>
                            <span>Listing</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/messages" className="nav-link">
                            <svg fill="CurrentColor" width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21,4H3A1,1,0,0,0,2,5V17a1,1,0,0,0,1,1h8.649l4.726,3.781A1,1,0,0,0,18,21V18h3a1,1,0,0,0,1-1V5A1,1,0,0,0,21,4ZM18.086,6L12,10.733,5.914,6H18.086ZM16,16v2.919l-3.375-2.7A1,1,0,0,0,12,16H4V7.045l7.386,5.744a1,1,0,0,0,1.229,0L20,7.045V16H16Z"></path></svg>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/orders-delivery" className="nav-link">
                            <svg fill="CurrentColor" width="24px" height="24px" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M16.5,12h-9a0.5,0.5,0,0,1,0-1h9A0.5,0.5,0,0,1,16.5,12Z"></path><path d="M15.5,15h-8a0.5,0.5,0,0,1,0-1h8A0.5,0.5,0,0,1,15.5,15Z"></path><path d="M13.5,18h-6a0.5,0.5,0,0,1,0-1h6A0.5,0.5,0,1,1,13.5,18Z"></path><path d="M20,3H15.859A3.982,3.982,0,0,0,8.141,3H4A1,1,0,0,0,3,4V21a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM10,5h0.277A1.979,1.979,0,0,1,10,4a2,2,0,0,1,4,0,1.979,1.979,0,0,1-.277,1H14a2,2,0,0,1,2,2H8A2,2,0,0,1,10,5Zm9,15H5V5H6.54A3.972,3.972,0,0,0,6,7V9H18V7a3.972,3.972,0,0,0-.54-2H19V20Z"></path><circle cx="12" cy="3.5" r="0.5"></circle></svg>
                            <span>Orders & Delivery</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/star-seller" className="nav-link">
                            <svg fill="CurrentColor" width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true" focusable="false">  <path d="M20.902 7.09l-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.341-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09h.243zm-6.097 6.062l.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484-2.44 2.303z"></path></svg>
                            <span>Star Seller</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" className="nav-link">
                            <svg fill="CurrentColor" width="24px" height="24px" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M8,20V13a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1v7H8Z"></path><path d="M14,20V9a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1V20h4Z"></path><path d="M20,20V5a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V20h4Z"></path></svg>
                            <span>Stats</span>
                        </NavLink>
                    </li>
                    <li>
                        <a href="#" className="nav-link justify-content-between" onClick={handleSubmenuShow} >
                            <div>
                                <svg fill="CurrentColor" width="24px" height="24px" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M21,20H3a1,1,0,0,0,0,2H21A1,1,0,0,0,21,20Z"></path><path d="M20,9a1,1,0,0,0-1-1H5a1,1,0,0,0,0,2v7a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2V10A1,1,0,0,0,20,9Zm-7,1v7H11V10h2ZM7,10H9v7H7V10Zm10,7H15V10h2v7Z"></path><path d="M3.406,7.914L12,4.095l8.594,3.819a1,1,0,0,0,.813-1.828l-9-4a1,1,0,0,0-.812,0l-9,4A1,1,0,1,0,3.406,7.914Z"></path></svg>
                                <span>Finances</span>
                            </div>
                            <svg fill="CurrentColor" width="18px" height="18px"  aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg>
                        </a>
                        <div className={`submenu ${SubmenuShow ? "" : "active"}`} onMouseLeave={handleSubmenuShow} >
                            <h6 class="text-gray-lighter">Finances</h6>
                            <ul class="list-nav icon-b-2">
                                <li><a class="list-nav-item" href="#">Payment account
                                </a></li>
                                <li><a class="list-nav-item" href="#">Monthly statements
                                </a></li>
                                <li><a class="list-nav-item" href="#">Payment settings
                                </a></li>
                                <li>
                                    <a class="list-nav-item" href="#">Legal and tax information
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/Marketing" className="nav-link">
                            <svg fill="CurrentColor" width="24px" height="24px" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M17,4a1,1,0,0,0-1,1V5.625L3.8,9.436A0.982,0.982,0,0,0,3,9a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1,0.989,0.989,0,0,0,.869-0.533l0.644,0.161a3.488,3.488,0,0,0,6.507,1.627L16,18.5V19a1,1,0,0,0,2,0V5A1,1,0,0,0,17,4ZM8,18a2.507,2.507,0,0,1-2.467-2.117l4.445,1.111A2.482,2.482,0,0,1,8,18ZM4,13.438V11.47L16,7.72v8.718Z"></path><path d="M20,10.458a0.5,0.5,0,0,0,.273-0.081l3-1.958a0.5,0.5,0,0,0-.547-0.838l-3,1.958A0.5,0.5,0,0,0,20,10.458Z"></path><path d="M23.273,15.539l-3-1.958a0.5,0.5,0,0,0-.547.838l3,1.958A0.5,0.5,0,0,0,23.273,15.539Z"></path></svg>
                            <span>Marketing</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Integrations" className="nav-link">
                            <svg fill="CurrentColor" width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="4" width="7" height="7"></rect><rect x="13" y="4" width="7" height="7"></rect><rect x="4" y="13" width="7" height="7"></rect><rect x="13" y="13" width="7" height="7"></rect></svg>
                            <span>Integrations</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Community" className="nav-link">
                            <svg fill="CurrentColor" width="24px" height="24px" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M7 12c2.21 0 4-1.79 4-4S9.21 4 7 4 3 5.79 3 8s1.79 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM23.868 17.037C22.48 14.547 19.848 13 17 13c-1.857 0-3.614.666-5.002 1.813C10.61 13.666 8.852 13 6.995 13c-2.85 0-5.48 1.547-6.868 4.037-.27.482-.097 1.092.386 1.36.48.27 1.092.097 1.36-.386C2.91 16.155 4.87 15 6.995 15c1.34 0 2.616.462 3.636 1.268.54.427 1 .955 1.368 1.558.038.063.084.12.12.185.183.33.523.514.874.514.165 0 .332-.04.486-.127.482-.27.655-.878.386-1.36-.15-.27-.32-.522-.5-.77C14.385 15.463 15.66 15 17 15c2.124 0 4.086 1.154 5.122 3.012.183.328.523.513.874.513.165 0 .332-.04.486-.127.483-.27.656-.878.386-1.36zM17 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path></svg>
                            <span>Community & Help</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Settings" className="nav-link">
                            <svg fill="CurrentColor" width="24px" height="24px" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M17.957,12.692a5.61,5.61,0,0,0,0-1.376l1.24-1.2A1,1,0,0,0,19.37,8.9L18.382,7.184a1,1,0,0,0-1.141-.463l-1.66.473a5.985,5.985,0,0,0-1.2-.7L13.96,4.824a1,1,0,0,0-.97-0.758H11.01a1,1,0,0,0-.97.758L9.623,6.491a5.981,5.981,0,0,0-1.2.7L6.765,6.714a1,1,0,0,0-1.142.462L4.633,8.892A1,1,0,0,0,4.8,10.11l1.239,1.2a5.61,5.61,0,0,0,0,1.376l-1.24,1.2A1,1,0,0,0,4.63,15.1l0.988,1.717a1,1,0,0,0,.866.5,1.022,1.022,0,0,0,.274-0.038l1.66-.473a5.985,5.985,0,0,0,1.2.7l0.417,1.667a1,1,0,0,0,.97.758h1.98a1,1,0,0,0,.97-0.758l0.417-1.667a5.981,5.981,0,0,0,1.2-.7l1.661,0.475a1.034,1.034,0,0,0,.275.038,1,1,0,0,0,.866-0.5l0.99-1.716A1,1,0,0,0,19.2,13.89ZM12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"></path></svg>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-end">
                <a href="javaacript:void(0)" onClick={handleSidebar} className="sidebar-collapse nav-link justify-content-end">
                    <svg fill="CurrentColor" width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 18c-.256 0-.512-.098-.707-.293L4.586 12l5.707-5.707c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414L7.414 12l4.293 4.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z"></path><path d="M17 18c-.256 0-.512-.098-.707-.293L10.586 12l5.707-5.707c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414L13.414 12l4.293 4.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z"></path></svg>
                </a>
            </div>
        </div>
    );
}
