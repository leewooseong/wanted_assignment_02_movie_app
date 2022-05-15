import { axios } from 'hooks/worker'
import { IMovieAPIRes, IMovieAPIErrorRes } from 'types/movie.d'

const MOVIE_BASE_URL = 'http://www.omdbapi.com/'

interface Params {
  s: string
  page: number
}

export const getMovieApi = (params: Params) =>
  axios.get<IMovieAPIRes | IMovieAPIErrorRes>(MOVIE_BASE_URL, {
    params: {
      apikey: process.env.REACT_APP_MOVIE_API_KEY,
      ...params,
    },
  })
