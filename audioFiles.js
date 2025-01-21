// Define repository URLs
const repository1 = "https://github.com/atsuperman/play2/raw/refs/heads/main/";
const repository2 = "https://github.com/atsuperman/play2/raw/refs/heads/main/";

// Define file names for each repository
const repo1Songs = ["Achacho.mp3", "DIVINE.mp3"];
const repo2Songs = ["song1.mp3", "song2.mp3"];

// Combine all songs with their full paths
export const allSongs = [
    ...repo1Songs.map(file => repository1 + file),
    ...repo2Songs.map(file => repository2 + file)
];
