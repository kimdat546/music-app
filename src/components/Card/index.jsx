import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import CardPin from "../CardPin";
import cx from "classnames";

const Card = ({ type, image, name, songs }) => {
    const [isHover, setIsHover] = useState(false);
    const classes = cx("group/card transition-app w-card", {
        "rotate-[-3deg] hover:translate-y-1 hover:rotate-[-3deg]":
            type === "left",
        "rotate-[5deg] mt-4 hover:translate-y-1 hover:rotate-[5deg]":
            type === "right",
    });

    return (
        <div
            className={classes}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="flex flex-col border-app rounded-md p-2 bg-white relative group-hover/card:bg-gray-light">
                <CardPin
                    position={type === "left" ? "top-center" : "top"}
                    hover={isHover}
                />
                <div className="overflow-hidden aspect-image rounded-sm relative">
                    <img
                        className="w-full absolute-center"
                        src={image}
                        alt={name}
                    />
                </div>
                <div>
                    <div className="pt-3 flex-between px-2">
                        <span className="text-text font-medium text-sm">
                            {songs}
                        </span>
                        <button className="flex-center border-none text-black shrink-0 cursor-pointer p-0 rounded-full bg-transparent">
                            <AiFillPlayCircle className="text-3xl" />
                            <div className="block absolute inset-0"></div>
                        </button>
                    </div>
                    <h2 className="mt-1 text-base font-semibold pb-2 px-2">
                        {name}
                    </h2>
                </div>
                <div
                    className={`bottom-line ${
                        type === "left" ? "!bg-yellow" : "!bg-green-light"
                    } `}
                ></div>
            </div>
        </div>
    );
};

export default Card;
