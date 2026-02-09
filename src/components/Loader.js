import React from 'react';

const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader-spinner">
                <div className="spinner-ring"></div>
                <span className="loader-text">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
