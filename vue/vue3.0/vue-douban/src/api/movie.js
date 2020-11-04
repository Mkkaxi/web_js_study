import service from '@/utils/request'

export function fetchMovieList(movie_type, params) {
  return service({
    url: '/ajax/' + movie_type,
    method: 'get',
    params: params
  })
}