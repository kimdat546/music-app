import React, { useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import {
    AiOutlineHeart,
    AiOutlineFire,
    AiOutlineSetting,
} from "react-icons/ai";
import cx from "classnames";

type Props = {
    icon: React.ReactNode;
    active: boolean;
    onClick: () => void;
};

const MenuItem: React.FC<Props> = ({ icon, active, onClick }) => {
    const classes = cx(
        "flex-center p-1.5 rounded-sm text-2xl text-white border-[2px] border-solid border-transparent w-[80px] h-[2em] transition-app hover:bg-yellow hover:text-black hover:border-black",
        {
            "!text-black bg-yellow !border-black": active,
        }
    );

    return (
        <button className={classes} onClick={onClick}>
            {icon}
        </button>
    );
};

const Menu = () => {
    const [isActive, setIsActive] = useState("home");

    return (
        <div className="relative z-10">
            <div className="bg-menu rounded-sm flex-between border-app p-3 relative">
                <MenuItem
                    icon={<BiHomeAlt2 />}
                    active={isActive === "home"}
                    onClick={() => setIsActive("home")}
                />
                <MenuItem
                    icon={<AiOutlineHeart />}
                    active={isActive === "heart"}
                    onClick={() => setIsActive("heart")}
                />
                <MenuItem
                    icon={<AiOutlineFire />}
                    active={isActive === "fire"}
                    onClick={() => setIsActive("fire")}
                />
                <MenuItem
                    icon={<AiOutlineSetting />}
                    active={isActive === "setting"}
                    onClick={() => setIsActive("setting")}
                />
                <div className="bottom-line"></div>
            </div>
        </div>
    );
};

export default Menu;
