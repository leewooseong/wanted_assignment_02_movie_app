// 검색 결과 ReS
interface IMovieSearch {
  Title: string
  Year: string
  imdbID: string
  Type: String
  Poster: string
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

// Response Example
// {
//  Search: [
//      {
//          Title: "Dai 6 kai FNS no hi sûpâ supesharu 1 oku 2000 man nin no Heisei kyôiku terebi",
//          Year: "1992",
//          imdbID: "tt1517172",
//          Type: "movie",
//          Poster: "N/A"
//      }
//  ],
//  totalResults: "1",
//  Response: "True"
// }
