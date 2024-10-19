import React, { useRef } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import CardPin from "./CardPin";
import { cld } from "@/configs";
import cx from "classnames";
import useWavesurfer from "@/hooks/useWavesurfer";

type Props = {
    image: string;
    artist: string;
    name: string;
    time: string;
};

const CurrentPlaying: React.FC<Props> = ({ image, artist, name, time }) => {
    const mp3File = cld.video("song_t3uofs");
    const audioSrc =
        "https://p.scdn.co/mp3-preview/371db5fccf111b1bc77434df874c50c551cf1b37?cid=42d6f0ebb22f4ab29bf9e81ac67a8263";
    const waveContainerRef = useRef<HTMLDivElement>(null);
    const { handlePlayPause, isPlaying, setAudioVolume, audioVolume } =
        useWavesurfer(
            waveContainerRef as React.MutableRefObject<HTMLDivElement>,
            audioSrc,
            () => {}
        );

    return (
        <div className="py-4 px-2 mb-6">
            <div className="w-full rotate-[3deg] transition-app">
                <div className="flex-center border-app rounded-md relative p-4 bg-white hover:bg-gray-light">
                    <CardPin position="top-left" simple />
                    <div
                        className={cx(
                            "w-avt-md h-avt-md shrink-0 rounded-full overflow-hidden aspect-image relative",
                            { "animate-spin": isPlaying }
                        )}
                    >
                        <img
                            className="w-full absolute-center"
                            src={image}
                            alt={name}
                        />
                        <div className="absolute-center w-2.5 h-2.5 bg-white border-app rounded-full"></div>
                    </div>
                    <div className="w-full mt-0 ml-2 px-2 pt-3 pb-2 flex flex-col gap-0.5">
                        <div className="flex-between    ">
                            <span className="font-bold">{artist}</span>

                            <button
                                className="flex-center border-none text-black shrink-0 cursor-pointer p-0 rounded-full bg-transparent"
                                onClick={handlePlayPause}
                            >
                                {isPlaying ? (
                                    <AiFillPauseCircle className="text-3xl" />
                                ) : (
                                    <AiFillPlayCircle className="text-3xl" />
                                )}
                            </button>
                        </div>
                        <h2 className="font-medium text-lg text-text flex-between flex-wrap gap-2">
                            {!isPlaying && (
                                <div
                                    className={cx("transition-app", {
                                        "opacity-0": isPlaying,
                                    })}
                                >
                                    {name}
                                </div>
                            )}
                            <div
                                className={cx(
                                    "relative w-full h-[20px] flex-1 opacity-0 transition-app",
                                    {
                                        "opacity-100": isPlaying,
                                    }
                                )}
                                ref={waveContainerRef}
                            ></div>
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
