import React from "react";

const Background = ({ children }) => {
    return (
        <div className="bg-white w-full p-4 md:w-app md:min-w-app md:p-8 overflow-hidden mx-auto md:shadow-app md:rounded-lg">
            {children}
        </div>
    );
};

export default Background;
