import React from 'react';

const MainContentSection = ({
    children
} : {
    children: React.ReactNode
}) => {
    return (
        <section className="main-content">
            {children}
        </section>
    );
};

export default MainContentSection;
