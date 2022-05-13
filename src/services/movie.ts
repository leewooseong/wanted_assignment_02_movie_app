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

// IMovieApiErrorRes는 넣는게 좋을 지 한번 생각해보기

// api 요청 방식
// http://www.omdbapi.com/?apikey=92e32667&s={검색어}&page={페이지번호(1~100)}

// api 요청 시 고려 사항
// 1. 검색 결과가 너무 많은 경우 또는 요청이 잘못된 경우 에러처리 -> 요청이 실패한다. 이 경우에 대한 처리도 필요
