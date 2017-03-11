import React from 'react';

const Header = (props) => {
    return (
        <section className="page-header">
            <h1 className="project-name">React Bubble Preloader</h1>
            <h2 className="project-tagline">examples</h2>
            <h2>
                {props.downloadsInfo}
            </h2>
            <a href="https://github.com/ivanzusko/react-bubble-preloader" className="btn">View on GitHub</a>
        </section>
    );
}

export default Header;
