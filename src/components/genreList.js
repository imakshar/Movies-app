export const genres = [
  {
    id: 0,
    name: "Action",
    url:"/movies/action"
  },
  {
    id: 1,
    name: "Comedy",
    url:"/movies/comedy"

  },
  {
    id: 2,
    name: "Drama",
    url:"/movies/drama"

  },
  {
    id:4,
    name: "Horror",
    url:"/movies/horror"

  }
];

export function getGenres() {
  return genres.filter(g => g);
}
