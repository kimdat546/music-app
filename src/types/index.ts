export type Tracks = {
    id: string;
    name: string;
    artist: string;
};

export type Playlist = {
    id: string;
    name: string;
    tracks: Tracks[];
};
