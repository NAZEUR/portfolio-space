export type Track = {
  id: string;
  title: string;
  artist: string;
  src: string;
};

export const playlist: Track[] = [
  {
    id: "t1",
    title: "Favourite Crime",
    artist: "Olivia Rodrigo",
    src: "/songs/Olivia Rodrigo - favourite crime (Official Instrumental).mp3",
  },
  {
    id: "t2",
    title: "Enough For You",
    artist: "Olivia Rodrigo",
    src: "/songs/Olivia Rodrigo - enough for you (Official Instrumental).mp3",
  },
  {
    id: "t3",
    title: "Happier",
    artist: "Olivia Rodrigo",
    src: "/songs/Olivia Rodrigo - happier (Official Instrumental).mp3",
  },
  {
    id: "t4",
    title: "The 1",
    artist: "Taylor Swift",
    src: "/songs/Taylor Swift - the 1 (Official Instrumental).mp3",
  }
];
