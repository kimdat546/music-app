import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="bg-background h-full min-h-screen w-full flex-center px-8 py-[5vw]">
            {children}
        </div>
    );
};

export default Layout;
