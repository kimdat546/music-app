import React from "react";

const Background = ({ children }) => {
    return (
        <div className="bg-white w-app min-w-app p-8 overflow-hidden mx-auto shadow-app rounded-lg">
            {children}
        </div>
    );
};

export default Background;
