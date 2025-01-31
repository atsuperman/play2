// Configuration: Add/remove repos here easily
const repositories = [
  {
    url: "https://github.com/atsuperman/play2/raw/main/",
    songs: [
      { file: "Achacho.mp3", details: "Details for Achacho song." },
      { file: "Edho Solla.mp3", details: "Details for Edho Solla song." },
      { file: "DIVINE.mp3", details: "Details for DIVINE song." }
    ]
  },
  {
    url: "https://github.com/atsuperman/PLAY/raw/main/",
    songs: [
      { file: "Beer_song_Pacha_Kuthikennen.mp3", details: "Details for Pacha Kuthikennen." },
      { file: "Kaattumalli.mp3", details: "Details for Kaattumalli." }
    ]
  }
];

// Generate allSongs with encoded URLs
export const allSongs = repositories.flatMap(repo => 
  repo.songs.map(song => ({
    ...song,
    path: `${repo.url}${song.file}`.replace(/ /g, '%20') // Encode spaces
  }))
);
