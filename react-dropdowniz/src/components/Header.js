import React from 'react';
import Config from '../Config.json';

const Header = (props) => {
    return (
        <section className="page-header">
            <h1 className="project-name">{Config.name}</h1>
            <h2 className="project-tagline">examples</h2>
            <h2>
                {props.downloadsInfo}
            </h2>
            <a href={`${Config.url}`} className="btn" target="_blank">View on GitHub</a>
        </section>
    );
}

export default Header;
