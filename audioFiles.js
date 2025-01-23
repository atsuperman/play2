

// Define repository URLs 
const repository1 = "https://github.com/atsuperman/play2/raw/refs/heads/main/";
const repository2 = "https://github.com/atsuperman/PLAY/raw/refs/heads/main/";

// Define file names for each repository
const repo1Songs = [
    { file: "Achacho.mp3", details: " This is details for Achacho song." },
    { file: "Edho Solla.mp3", details: " This is details for Achacho song." },
    { file: "DIVIN test extra jeienkeiekmekekekE.mp3", details: " This is details for DIVINE song." }
];
const repo2Songs = [
    { file: "Beer_song_Pacha_Kuthikennen.mp3", details: "Details: This is extra button heo sksleo keleju details for song1." },
    { file: "Kaattumalli.mp3", details: "Details: This is details for song2." }
];

// Combine all songs with their full paths and details
export const allSongs = [
    ...repo1Songs.map(song => ({ ...song, path: repository1 + song.file })),
    ...repo2Songs.map(song => ({ ...song, path: repository2 + song.file }))
];
