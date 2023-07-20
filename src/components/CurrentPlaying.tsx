import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import CardPin from "./CardPin";

type Props = {
    image: string;
    artist: string;
    name: string;
    time: string;
};

const CurrentPlaying: React.FC<Props> = ({ image, artist, name, time }) => {
    return (
        <div className="py-4 px-2 mb-6">
            <div className="w-full rotate-[3deg] transition-app">
                <div className="flex-center border-app rounded-md relative p-4 bg-white hover:bg-gray-light">
                    <CardPin position="top-left" simple />
                    <div className="w-avt-md h-avt-md shrink-0 rounded-sm overflow-hidden aspect-image relative">
                        <img
                            className="w-full absolute-center"
                            src={image}
                            alt={name}
                        />
                    </div>
                    <div className="w-full mt-0 ml-2 px-2 pt-3 pb-2 flex flex-col gap-0.5">
                        <div className="flex-between    ">
                            <span className="font-bold">{artist}</span>
                            <button className="flex-center border-none text-black shrink-0 cursor-pointer p-0 rounded-full bg-transparent">
                                <AiFillPlayCircle className="text-3xl" />
                            </button>
                        </div>
                        <h2 className="font-medium text-lg text-text flex-between flex-wrap">
                            {name}
                            <span className="font-semibold">{time}</span>
                        </h2>
                    </div>
                    <CardPin position="bottom-right" simple />

                    <div className="bottom-line !bg-green"></div>
                </div>
            </div>
        </div>
    );
};

export default CurrentPlaying;
