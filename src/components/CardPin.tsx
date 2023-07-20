import React from "react";
import cx from "classnames";

type Props = {
    position: "top-center" | "top" | "top-left" | "bottom-right";
    simple?: boolean;
    hover?: boolean;
};

const CardPin: React.FC<Props> = ({ position, simple, hover }) => {
    const styles = {
        "top-center": "top-[20px] left-1/2 rotate-[3deg] ",
        top: "top-[20px] left-[20px] rotate-[-5deg]",
        "top-left": "top-[10px] left-[15px] rotate-[-45deg]",
        "bottom-right":
            "top-[calc(100%-20px)] left-[calc(100%-20px)] rotate-[120deg]",
    };
    return (
        <div
            className={`w-pin h-pin bg-black absolute rounded-full z-10 ${
                !simple ? "shadow-pin" : "shadow-none"
            } translate-x-[-50%] ${styles[position]} `}
        >
            <div
                className={`block absolute w-pin h-pin bg-black rounded-full left-1/2 translate-x-[-50%] top-[-44px] transition-app ${
                    hover ? "-translate-y-1" : ""
                }`}
            ></div>
            <div
                className={cx(
                    "block absolute w-[6px] h-[50px] bg-white border border-solid border-black rounded-full left-1/2 translate-x-[-50%] bottom-[3px] transition-app",
                    {
                        "h-[54px]": hover,
                    }
                )}
            ></div>
        </div>
    );
};

export default CardPin;
