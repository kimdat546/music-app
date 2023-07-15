import React, { useState } from "react";
import cx from "classnames";

const TabItem = ({ title, active, onClick }) => {
    const classes = cx("group/tab font-medium text-lg px-2 relative z-10", {
        "active bg-yellow": active,
    });
    return (
        <li className={classes} onClick={onClick}>
            <div className="block absolute w-full h-[14px] bg-transparent z-[-1] bottom-[-2px] left-0 transition-app group-[.active]/tab:bg-yellow group-hover/tab:bg-yellow"></div>
            {title}
        </li>
    );
};

const Tabs = () => {
    const [isActive, setIsActive] = useState("Overview");
    return (
        <ul className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-solid border-b-[1px] border-black mb-6">
            <TabItem
                title="Overview"
                active={isActive === "Overview"}
                onClick={() => setIsActive("Overview")}
            />
            <TabItem
                title="Songs"
                active={isActive === "Songs"}
                onClick={() => setIsActive("Songs")}
            />
            <TabItem
                title="Albums"
                active={isActive === "Albums"}
                onClick={() => setIsActive("Albums")}
            />
            <TabItem
                title="Artists"
                active={isActive === "Artists"}
                onClick={() => setIsActive("Artists")}
            />
        </ul>
    );
};

export default Tabs;
