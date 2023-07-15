import React from "react";
import { BsSearch } from "react-icons/bs";
import Card from "../Card";

const Playlists = () => {
    return (
        <div className="flex justify-between pt-6 px-2 py-8">
            <Card
                type="left"
                image="https://assets.codepen.io/285131/illustration-hand-with-cigarette-icon.jpg"
                name="Alan Walker"
                songs="20 songs"
            />
            <Card
                type="right"
                image="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg"
                name="Tim Bergling"
                songs="20 songs"
            />
        </div>
    );
};

export default Playlists;
