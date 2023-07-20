import React, { useMemo } from "react";
import { BsBell } from "react-icons/bs";
import { cld } from "../../configs";
import { AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";

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

const Avatar = () => {
    // Use the image with public ID, 'front_face'.
    const myImage = cld.image("cld-sample");

    // get mp3 file from cloudinary have id is song_t3uofs
    const mp3File = cld.video("song_t3uofs");

    console.log(mp3File.toURL());

    // Apply the transformation.
    myImage.format("png"); // Deliver as PNG. */

    return (
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
                <AdvancedImage
                    className="w-full h-full object-cover"
                    cldImg={myImage.resize(scale().width(100))}
                    alt="avatar"
                />
            </button>
        </div>
    );
};

const Header = () => {
    return (
        <header className="flex-between mb-6">
            <Logo />
            <h1 className="text-xl font-semibold">Music App</h1>
            <Avatar />
        </header>
    );
};

export default Header;
