import React from 'react';

const MainContentSection = (props) => {
    return (
        <section className="main-content">
            {props.children}
        </section>
    );
};

export default MainContentSection;
