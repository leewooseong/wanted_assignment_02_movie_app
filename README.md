# Movie app(Search & favorite)
## 최종 결과 사이트
- https://wanted-assignment-01-movie-app.vercel.app/
## 디렉토리 구조
```
src
   ├─assets
   │  ├─pngs
   │  └─svgs
   │      └─movie
   ├─component
   │  ├─LoadingBar
   │  ├─Modal
   │  ├─MovlieList
   │  ├─Navigation
   │  └─Search
   ├─hooks
   │  ├─state
   │  └─worker
   ├─routes
   │  ├─MovieFavorite
   │  └─MovieSearch
   ├─services
   ├─states
   ├─styles
   │  ├─base
   │  ├─constants
   │  └─mixins
   ├─types
   └─utils
   ```
## 데이터 구조
```
검색 결과 ReS
interface IMovieSearch {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
  isFav?: boolean
}

요청이 성공한 경우 RES
export interface IMovieAPIRes {
  Search: IMovieSearch[]
  totalResults: string
  Response: string
}
```


## 메인 페이지(Search)

### 구현 사항

- api 수행
  - 검색창을 통해서 api 요청을 수행한다.
   
- 데이터 필더링
  - api 요청 결과를 받아와 중복데이터를 필터링 및 favorite에 등록된 movie를 요청 결과 ```isFav```에 반영해준다.
- 모달창
  - 클릭한 영화 아이템의 ```isFav```에 따라 다른 화면이 나타난다.
  - ```isFav : true```일 경우 즐겨찾기 등록 취소하는 화면이 나타난다.
  - ```isFav : false```일 경우 즐겨찾기를 등록하는 화면이 나타난다.


## 즐겨찾기 페이지(Favorite)

### 구현 사항
- Search 페이지에서 즐겨찾기에 등록한 영화들이 화면에 표시된다.

