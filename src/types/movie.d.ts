// 검색 결과 ReS
interface IMovieSearch {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
  isFav?: boolean
}

// 요청이 성공한 경우 RES
export interface IMovieAPIRes {
  Search: IMovieSearch[]
  totalResults: string
  Response: string
}

// 요청이 실패한 경우에 RES
export interface IMovieAPIErrorRes {
  Response: string
  Error: string
}
