import React, { useMemo } from "react";
import { BsBell } from "react-icons/bs";

const Circle = () => (
    <span className="w-pin h-pin border-app block rounded-full bg-yellow"></span>
);

const Logo = () => (
    <div className="flex-1">
        <div className="flex-center w-avt h-avt bg-[#a8dee2] rounded-sm border-app">
            <div className=" flex w-[24px] h-[24px] flex-wrap">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
        </div>
    </div>
);

const Avatar = () => (
    <div className="flex gap-3 flex-1 justify-end">
        <div className="relative flex items-center hover:rotate-[10deg] transition-app">
            <button className="relative cursor-pointer">
                <BsBell className="text-3xl text-bell" />
            </button>
            <div className="flex-center absolute w-badge h-badge text-xs top-[3px] right-[-8px] bg-red rounded-full font-extrabold border-app">
                2
            </div>
        </div>
        <button className="w-avt h-avt rounded-sm flex-center overflow-hidden border-[3px] border-solid border-white shadow-avt cursor-pointer transition-app hover:-translate-y-0.5 hover:shadow-avt-md">
            <img
                src="https://assets.codepen.io/285131/pexels-photo-838875.jpeg"
                alt="avatar"
            />
        </button>
    </div>
);

const Header = () => {
    return (
        <header className="flex-between mb-6">
            <Logo />
            <h1 className="text-xl font-semibold">Home</h1>
            <Avatar />
        </header>
    );
};

export default Header;
