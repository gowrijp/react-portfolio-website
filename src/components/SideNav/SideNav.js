import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars0.githubusercontent.com/u/34152914?s=400&u=f20578acecce8b8eaf50e6161359a06d8a61184f&v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Gowri Jayaprakash</h2>
            <p className="subtitle">"4th yr UG at IIT KGP"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};