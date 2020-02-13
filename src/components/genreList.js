export const genres = [
  {
    id: 0,
    name: "Action"
  },
  {
    id: 1,
    name: "Comedy"
  },
  {
    id: 2,
    name: "Drama"
  }
];

export function getGenres() {
  return genres.filter(g => g);
}
