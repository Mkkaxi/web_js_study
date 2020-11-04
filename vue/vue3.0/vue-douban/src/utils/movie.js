import { fetchMovieList } from '../api/movie'

export async function getMovieSection(movie_key, params) {
  let s = {}
  await fetchMovieList(movie_key, params).then(function(res) {
    s.type = movie_key
    s.movies = res
  })
  return s
}