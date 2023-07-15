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
function App() {
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
