import React from "react";

type Props = {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="bg-background h-full min-h-screen w-full flex-center md:px-8 md:py-[5vw]">
            {children}
        </div>
    );
};

export default Layout;
