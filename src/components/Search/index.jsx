import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
    return (
        <div className="group relative z-10 mb-8 transition-app hover:-translate-y-0.5">
            <div className="relative flex-center border-app rounded-sm h-[60px] text-base w-full bg-white m-0">
                <button className="flex-center rounded-l-sm bg-gray-light border-r-[2px] border-black border-solid h-full w-[70px] cursor-pointer">
                    <BsSearch className="font-bold text-sm" />
                </button>
                <input
                    className="px-4 bg-white rounded-r-sm h-full w-full outline-none font-semibold placeholder:text-black placeholder:font-medium"
                    type="text"
                    placeholder="Search Music"
                />
                <div className="bottom-line group-hover:translate-y-0.5"></div>
            </div>
        </div>
    );
};

export default Search;
