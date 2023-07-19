import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="bg-background h-full min-h-screen w-full flex-center md:px-8 md:py-[5vw]">
            {children}
        </div>
    );
};

export default Layout;
