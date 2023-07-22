import React from 'react';

const HeightWrapper = ({ dir = "column", children}) => {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                flexDirection: dir,
            }}
        >
            {children}
        </div>
    );
};

export default HeightWrapper;