import service from '@/utils/request'

export function fetchMovieList(movie_type, params) {
  return service({
    url: '/v2/movie/' + movie_type,
    method: 'get',
    params: params
  })
}