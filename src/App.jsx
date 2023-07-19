import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import {
    Layout,
    Background,
    Header,
    Description,
    Search,
    Menu,
    Tabs,
    Playlists,
    CurrentPlaying,
} from "./components";
import axios from "axios";

function App() {
    const [token, setToken] = useState("");

    useEffect(() => {
        async function getToken() {
            const response = await axios.post(
                "https://accounts.spotify.com/api/token",
                {
                    grant_type: "client_credentials",
                    client_id: "42d6f0ebb22f4ab29bf9e81ac67a8263",
                    client_secret: "c34e2fc0424642d199deecbf8890bb03",
                },
                {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded",
                    },
                }
            );

            const { data } = response;
            console.log(data);
            setToken(data.access_token);
        }

        getToken();
    }, []);
    return (
        <Layout>
            <Background>
                <Header />
                <Description />
                <Search />
                <Tabs />
                <Playlists />
                <CurrentPlaying
                    image="https://assets.codepen.io/285131/pink-pastel-juicy-banana.jpg"
                    artist="Marshmello"
                    name="Hate the Other Side"
                    time="3:40"
                />
                <Menu />
            </Background>
        </Layout>
    );
}

export default App;
